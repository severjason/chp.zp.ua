import * as React from 'react';
import * as img from '../../img/home-02-850x669.jpg';
import './index.css';

const ImageDivider: React.StatelessComponent = () => {
    return (
        <div className="ui container chp-image-divider-container">
            <div className="ui top aligned centered grid chp-image-divider">
                <div className="sixteen wide mobile eight wide computer column ">
                    <div >
                        <img src={img} />
                    </div>
                </div>
                <div className="sixteen wide mobile eight wide computer column ">
                    <div className="chp-image-text">
                        <h3>
                            Beat the Heat During the Extremely
                            Hot Summer!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDivider;
