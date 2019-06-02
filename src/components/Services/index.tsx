import React from 'react';
import { ReactNode } from 'react';
import { ChpServicesAndGoods } from '../../interfaces';
import './index.css';

const Services: React.FC<ChpServicesAndGoods> = ({texts, title}) => {

  const services: ReactNode = texts.map((text: string, index: number) => {
    return (
      <div key={index} className="column">
        <span className="numeration">
          0{index + 1}.&nbsp;
        </span>
        <br/>
        <div className="chp-service-text">
          {text}
        </div>
      </div>
    );
  });

  return (
    <div className="chp-services-wrapper">
      <div className="ui container chp-services-container">
        <h3>{title}</h3>
        <div className="ui three column grid">
          {services}
        </div>
      </div>
    </div>
  );
};

export default Services;
