import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';
import { ChpState } from './interfaces';
import rootReducer from './reducers';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { mainTheme, GlobalStyle } from 'styles';
import * as serviceWorker from './serviceWorker';

const store: Store<ChpState> = createStore(rootReducer);

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={mainTheme}>
                    <GlobalStyle>
                        <Routes/>
                    </GlobalStyle>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
