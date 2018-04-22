import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';
import { ChpState } from './interfaces';
import rootReducer from './reducers';
import Routes from './routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store: Store<ChpState> = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
