// tslint:disable no-unused-expression
import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

injectGlobal`
body {
  font-size: 14px;
  height: 100%;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}`;

export const GlobalStyle: any = styled.div`
  background: ${props => props.theme.defaultBgColor};
  color: ${props => props.theme.mainDarkColor};
  font-family: ${props => props.theme.fontFamily};
  
  .ui.grid {
  margin: 0;
}

a {
  color: ${props => props.theme.whiteColor};
    transition: color .5s;

  &:hover {
    color: ${props => props.theme.mainDarkColor};
  }
}`;