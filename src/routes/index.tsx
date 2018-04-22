import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { App } from '../containers';

const Routes: React.StatelessComponent<{}> = () => {
    return (
        <Switch>
            <Route path="/" component={App}/>
            <Route path="*" render={() => <Redirect to="/"/>} />
        </Switch>
    );
};

export default Routes;
