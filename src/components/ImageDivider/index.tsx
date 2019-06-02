import React from 'react';
import { ReactNode } from 'react';
import { ChpImage } from 'interfaces';
import ImageDividerStyle from './style';

interface Props {
  image: ChpImage;
}

const ImageDivider: React.FC<Props> = ({image: {src, desc, right, imageClass, text}}) => {

  const image: ReactNode = <img src={src} alt={desc}/>;

  const renderText: ReactNode = (
    <div className="chp-image-text">
      <h4>
        {text}
      </h4>
    </div>
  );
  return (
    <ImageDividerStyle>
      <div className={`chp-image-divider-wrapper ${imageClass ? imageClass : ''}`}>
        <div className="ui container chp-image-divider-container">
          <div className={`ui top aligned two column centered grid chp-image-divider ${right ? 'right' : ''}`}>
            <div className="sixteen wide mobile eight wide computer column ">
              {right ? image : renderText}
            </div>
            <div className="sixteen wide mobile eight wide computer column ">
              {right ? renderText : image}
            </div>
          </div>
        </div>
      </div>
    </ImageDividerStyle>
  );
};

export default ImageDivider;
