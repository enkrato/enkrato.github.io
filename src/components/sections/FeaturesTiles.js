import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Check out exceptional features below',
    paragraph: 'EnKraTo comes with numerous features that have been specifically designed to provide awesome user experience.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/home_icon.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Home Icon
                    </h4>
                  <p className="m-0 text-sm">
                    Choose to view shipping activities of people you have done shipping business with before.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/cart_icon.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Cart Icon
                    </h4>
                  <p className="m-0 text-sm">
                    Choose to view all information about incoming and outgoing shipment requests and upcoming shipments
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/airplane.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Airplane Icon
                    </h4>
                  <p className="m-0 text-sm">
                    Choose to view shipping options, list items for shipping and find shippers traveling to your shipment destination.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/notification.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Notification Icon
                    </h4>
                  <p className="m-0 text-sm">
                    Choose to view all notifications that are received from other EnKraTo users. From messages to shipment requests notifications.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/profile.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Profile Icon
                    </h4>
                  <p className="m-0 text-sm">
                    Choose to view user profile, reviews and shipments made by user. Upcoming travel information can also be found by selecting the icon.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/messages.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Message Icon
                    </h4>
                  <p className="m-0 text-sm">
                    Choose to view and search all ongoing chats with other EnKraTo users you have done business with before.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;