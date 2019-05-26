import * as React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import {  Footer, Header, ImageDivider, Partners, Services } from 'components';
import { ChpState } from 'interfaces';

export const App: React.StatelessComponent<ChpState> = (props) => (
    <div>
        <Header {...props}/>
        <Services {...props.services}/>
        <ImageDivider {...props.images[1]}/>
        <Services {...props.goods}/>
        <ImageDivider {...props.images[2]}/>
        <Partners partners={props.partners}/>
        <Footer/>
    </div>
);

export default connect<ChpState, any>(
    (state: ChpState) => state,
    null
)(App);
