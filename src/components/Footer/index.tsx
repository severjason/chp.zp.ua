import * as React from 'react';
import './index.css';

const Footer: React.StatelessComponent = () => {
    return (
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
                                    <div className="chp-text">Позвоните нам:</div>
                                    <a href="tel:+380504864980" className="chp-phone">+38 (050) 486-49-80</a><br/>
                                    <a href="tel:+380637862478" className="chp-phone">+38 (063) 786-24-78</a>
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
                                    <a href="mailto:yraseverinov@gmail.com" className="chp-mail">
                                        yraseverinov@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="sixteen wide column chp-copy">
                                    <a href="http://chp.zp.ua/">
                                        chp.zp.ua
                                    </a> @ 2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
