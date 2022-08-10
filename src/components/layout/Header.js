import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import Button from '../../components/pop_up';
import Modal from '../elements/Modal';


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFollowModal, setShowFollowModal] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const setmodaltrue = (e) => {
    e.preventDefault();
    setShowModal(true);
    console.log('modal:', showModal);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  }  

  const setFollowmodaltrue = (e) => {
    e.preventDefault();
    setShowFollowModal(true);
    console.log('modal:', showModal);
  }

  const closeFollowModal = (e) => {
    e.preventDefault();
    setShowFollowModal(false);
  }  

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }
  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <> 
     <Modal 
        show={showModal} 
        handleClose={closeModal} 
        text = "Icons generated with help from www.icons8.com ? Gitlab help from react.js.com"
     />
     <Modal 
        show={showFollowModal} 
        handleClose={closeFollowModal} 
        text="To get latest info and updates on EnKraTo, follow us on all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and Youtube @enkrato."
     />
    <header
      {...props}
      className={classes}
    >
     
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link onClick={setmodaltrue}>Attributions</Link>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={setFollowmodaltrue}>Follow us</Link>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  </>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
