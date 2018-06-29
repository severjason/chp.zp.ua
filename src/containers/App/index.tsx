import * as React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import {  Footer, Header, ImageDivider, Partners, Services } from 'components';
import { ChpState } from 'interfaces';

class App extends React.Component<ChpState> {
    public render() {
        return (
            <div>
                <Header {...this.props}/>
                <Services {...this.props.services}/>
                <ImageDivider {...this.props.images[1]}/>
                <Services {...this.props.goods}/>
                <ImageDivider {...this.props.images[2]}/>
                <Partners partners={this.props.partners}/>
                <Footer/>
            </div>
        );
    }
}

export default connect<ChpState, any>(
    (state: ChpState) => state,
    null
)(App);
