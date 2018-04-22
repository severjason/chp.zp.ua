import * as React from 'react';
import { ReactNode } from 'react';
import { ChpImage } from '../../interfaces';
import './index.css';

const ImageDivider: React.StatelessComponent<ChpImage> = (props: ChpImage) => {
    console.log(props);
    const image: ReactNode = (
        <div >
            <img src={props.src} />
        </div>
    );
    const text: ReactNode = (
        <div className="chp-image-text">
            <h3>
                {props.text}
            </h3>
        </div>
    );
    return (
        <div className="ui container chp-image-divider-container">
            <div className="ui top aligned centered grid chp-image-divider">
                <div className="sixteen wide mobile eight wide computer column ">
                    {props.right ? image : text}
                </div>
                <div className="sixteen wide mobile eight wide computer column ">
                    {props.right ? text : image}
                </div>
            </div>
        </div>
    );
};

export default ImageDivider;
