import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import {  Footer, Header, ImageDivider, Partners, Services } from 'components';
import { ChpState } from 'interfaces';

export const App: React.FC<ChpState> = ({ images, goods, partners, services}) => (
    <div>
        <Header image={images[0]}/>
        <Services texts={services.texts} title={services.title}/>
        <ImageDivider image={images[1]}/>
        <Services texts={goods.texts} title={goods.title}/>
        <ImageDivider image={images[2]}/>
        <Partners partners={partners}/>
        <Footer/>
    </div>
);

export default connect<ChpState, {}, {}, ChpState>((state: ChpState) => state)(App);
