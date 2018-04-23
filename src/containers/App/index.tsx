import * as React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import {  Footer, Header, ImageDivider, Partners, Services } from '../../components';
import { ChpState } from '../../interfaces';
import './index.css';

class App extends React.Component<any> {
    public render() {
        return (
            <div className="app-wrapper">
                <Header {...this.props}/>
                <Services/>
                <ImageDivider {...this.props.images[1]}/>
                <Services/>
                <Partners/>
                <Footer/>
            </div>
        );
    }
}

export default connect<ChpState, any>(
    (state: ChpState) => state,
    null
)(App);
