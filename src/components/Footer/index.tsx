import React from 'react';
import FooterStyle from './style';
import config from "config";

const Footer: React.FC = () => (
  <FooterStyle>
    <div className="chp-footer-wrapper">
      <div className="ui container chp-full-width">
        <div className="ui grid">
          <div className="sixteen wide mobile eight wide computer column chp-footer-element">
            <div className="ui middle aligned centered grid chp-footer-phone">
              <div className="row">
                <div className="right aligned four wide column">
                  <i className="chp-icon phone icon"/>
                </div>
                <div className="left aligned twelve wide column">
                  <div className="chp-text">Подзвоніть нам:</div>
                  <a href={`tel:${config.phone1.value}`} className="chp-phone">{config.phone1.formatted}</a><br/>
                  <a href={`tel:${config.phone2.value}`} className="chp-phone">{config.phone2.formatted}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="sixteen wide mobile eight wide computer column chp-footer-element">
            <div className="ui middle aligned grid chp-footer-mail">
              <div className="row">
                <div className="right aligned four wide column">
                  <i className="chp-icon envelope outline icon"/>
                </div>
                <div className="left aligned twelve wide column">
                  <a href={`mailto:${config.email}`} className="chp-mail">
                    {config.email}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="sixteen wide column chp-copy">
                  <a href={config.url}>
                    {config.website}
                  </a> @ {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FooterStyle>
);

export default Footer;
