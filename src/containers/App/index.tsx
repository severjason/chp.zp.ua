import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {  Footer, Header, ImageDivider, Partners, Services } from '../../components';
import './index.css';

class App extends React.Component {
    public render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <Services/>
                <ImageDivider/>
                <Services/>
                <Partners/>
                <Footer/>
            </div>
        );
    }
}

export default App;
