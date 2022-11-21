import React from 'react';
import { ImageDivider } from 'components';
import { ChpImage } from 'interfaces';
import HeaderStyle from './style';
import config from "config";

interface Props {
  image: ChpImage;
}

const Header: React.FC<Props> = ({image}) => {
  return (
    <HeaderStyle>
      <div className="chp-header-wrapper">
        <div className="ui container chp-full-width">
          <div className="ui grid chp-header">
            <div className="sixteen wide mobile seven wide computer column chp-header-element">
              <div className="ui middle aligned centered grid chp-header-text">
                <div className="row">
                  <div className="right aligned four wide column">
                    <i className="chp-icon snowflake outline icon"/>
                  </div>
                  <div className="chp-text twelve wide column">
                    <h1>ФОП Северинов</h1>
                    <a href={config.url}>{config.website}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sixteen wide mobile nine wide computer column chp-header-element">
              <div className="ui middle aligned grid chp-header-phone">
                <div className="row">
                  <div className="right aligned four wide column">
                    <i className="chp-icon phone icon"/>
                  </div>
                  <div className="twelve wide column">
                    <div className="chp-text">Подзвоніть нам:</div>
                    <a href={`tel:${config.phone1.value}`} className="chp-phone">{config.phone1.formatted}</a><br/>
                    <a href={`tel:${config.phone2.value}`} className="chp-phone">{config.phone2.formatted}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImageDivider image={image}/>
      </div>
    </HeaderStyle>
  );
};

export default Header;
