import * as React from 'react';
import { ReactNode } from 'react';
import { ChpPartner } from 'interfaces';
import PartnersStyle from './style';

interface ChpPartners {
    partners: ChpPartner[];
}

const Partners: React.StatelessComponent<ChpPartners> = (props: ChpPartners) => {
    const partners: ReactNode = props.partners.map((partner: ChpPartner, index: number) => {
        return (
            <div
                key={index}
                className="column"
            >
                <img
                    src={partner.logo}
                    alt={partner.title}
                    title={partner.title}
                    className="chp-partner-img"
                />
            </div>
        );
    });
    return (
        <PartnersStyle>
            <div className="chp-partners-wrapper">
                <div className="ui container chp-partners-container">
                    <div className="ui middle aligned equal width grid">
                        <div className="row">
                            {partners}
                        </div>
                    </div>
                </div>
            </div>
        </PartnersStyle>
    );
};

export default Partners;
