import * as React from 'react';
import { ReactNode } from 'react';
import { ChpPartner } from 'interfaces';
import PartnersStyle from './style';

interface Props {
  partners: ChpPartner[];
}

const Partners: React.FC<Props> = ({partners}) => {
  const renderPartners: ReactNode = partners.map((partner: ChpPartner, index: number) => {
    return (
      <div key={index} className="column">
        <img src={partner.logo} alt={partner.title} title={partner.title} className="chp-partner-img"/>
      </div>
    );
  });
  return (
    <PartnersStyle>
      <div className="chp-partners-wrapper">
        <div className="ui container chp-partners-container">
          <div className="ui middle aligned equal width grid">
            <div className="row">
              {renderPartners}
            </div>
          </div>
        </div>
      </div>
    </PartnersStyle>
  );
};

export default Partners;
