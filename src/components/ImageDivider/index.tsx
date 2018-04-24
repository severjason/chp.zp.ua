import * as React from 'react';
import { ReactNode } from 'react';
import { ChpImage } from '../../interfaces';
import './index.css';

const ImageDivider: React.StatelessComponent<ChpImage> = (props: ChpImage) => {
    const image: ReactNode = (
        <img src={props.src}/>
    );
    const text: ReactNode = (
        <div className="chp-image-text">
            <h4>
                {props.text}
            </h4>
        </div>
    );
    return (
        <div className={`chp-image-divider-wrapper ${props.class ? props.class : ''}`}>
            <div className="ui container chp-image-divider-container">
                <div
                    className={`ui top aligned two column centered grid chp-image-divider
                    ${props.right ? 'right' : ''}`}>
                    <div className="sixteen wide mobile eight wide computer column ">
                        {props.right ? image : text}
                    </div>
                    <div className="sixteen wide mobile eight wide computer column ">
                        {props.right ? text : image}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ImageDivider;
