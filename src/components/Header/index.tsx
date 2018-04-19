import * as React from 'react';
import './index.css';

const Header: React.StatelessComponent = () => {
    return (
        <div className="chp-header-wrapper">
            <div className="ui container">
                <div className="ui grid chp-header">
                    <div className="sixteen wide mobile eight wide computer column chp-header-element">
                        <div className="ui middle aligned centered grid chp-header-text">
                            <div className="row">
                                <div className="right aligned four wide computer column">
                                    <i className="chp-icon snowflake outline icon"/>
                                </div>
                                <div className="chp-text twelve wide computer column">
                                    <h3>ЧП Северинов</h3>
                                    <a href="http://chp.zp.ua/">chp.zp.ua</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="sixteen wide mobile eight wide computer column chp-header-element">
                        <div className="ui middle aligned grid chp-header-phone">
                            <div className="row">
                                <div className="right aligned five wide column">
                                    <i className="chp-icon phone icon"/>
                                </div>
                                <div className="eleven wide column">
                                    <div className="chp-text">Позвоните нам:</div>
                                    <a href="tel:+380504864980" className="chp-phone">+38 (050) 486-49-80</a><br/>
                                    <a href="tel:+380637862478" className="chp-phone">+38 (063) 786-24-78</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
