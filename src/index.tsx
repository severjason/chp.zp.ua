import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { mainTheme, GlobalStyle } from 'styles';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render((
  <BrowserRouter>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle>
        <Routes/>
      </GlobalStyle>
    </ThemeProvider>
  </BrowserRouter>
));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
