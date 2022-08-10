import React, {useState} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Modal from '../../elements/Modal';

const FooterNav = ({
  className,
  ...props
}) => {

  const [showPrivacytModal, setPrivacyModal] = useState(false);
  const [showAboutModal, setAboutModal] = useState(false);
  const [showFAQModal, setFAQModal] = useState(false);
  const [showSupportModal, setSupportModal] = useState(false);

  const setPrivacymodaltrue = (e) => {
    e.preventDefault();
    setPrivacyModal(true);
  }

  const closePrivacyModal = (e) => {
    e.preventDefault();
    setPrivacyModal(false);
  }  

  const setAboutmodaltrue = (e) => {
    e.preventDefault();
    setAboutModal(true);
  }

  const closeAboutModal = (e) => {
    e.preventDefault();
    setAboutModal(false);
  }  

  const setFAQmodaltrue = (e) => {
    e.preventDefault();
    setFAQModal(true);
  }

  const closeFAQModal = (e) => {
    e.preventDefault();
    setFAQModal(false);
  }  

  const setSupportmodaltrue = (e) => {
    e.preventDefault();
    setSupportModal(true);
  }

  const closeSupportModal = (e) => {
    e.preventDefault();
    setSupportModal(false);
  }  

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <>
      <Modal 
        show={showPrivacytModal} 
        handleClose={closePrivacyModal} 
        text = "Icons generated with help from www.icons8.com ? Gitlab help from react.js.com"
     />
     <Modal 
        show={showAboutModal} 
        handleClose={closeAboutModal} 
        text="To get latest info and updates on EnKraTo, follow us on all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and Youtube @enkrato."
     />
      <Modal 
        show={showFAQModal} 
        handleClose={closeFAQModal} 
        text = "Icons generated with help from www.icons8.com ? Gitlab help from react.js.com"
     />
     <Modal 
        show={showSupportModal} 
        handleClose={closeSupportModal} 
        text="To get latest info and updates on EnKraTo, follow us on all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and Youtube @enkrato."
     />
    <nav
      {...props}
      className={classes}
    >
      
    </nav>
    </>
  );
}

export default FooterNav;