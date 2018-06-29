import styled from 'styled-components';

const FooterStyle = styled.div`
.chp-footer-wrapper {
  background-color: ${props => props.theme.whiteColor};
  // height: $chp-container-min-height;

  .ui.grid {
    .chp-footer-element {
      padding: 0;
    }
  }

  .ui.grid.chp-footer-phone {
    background-color: ${props => props.theme.mainLightColor};
    height: ${props => props.theme.containerMinHeight / 3}rem;
    margin-top: ${props => props.theme.containerMinHeight / 3}rem;

    &::before {
      background-color: ${props => props.theme.mainLightColor};
      bottom: 0;
      content: '';
      height: ${props => props.theme.containerMinHeight / 3}rem;
      margin-top: ${props => props.theme.containerMinHeight / 3}rem;
      position: absolute;
      right: 0;
      top: 0;
      width: 100vw;
    }

    .chp-icon {
      color: ${props => props.theme.whiteColor};
      font-size: 3.5rem;
      height: 3.5rem;
      padding-top: 3rem;
    }

    .chp-text {
      font-size: 1.2rem;
      padding-bottom: 1rem;
    }

    .chp-phone {
      display: block;
      font-size: 2rem;
    }
  }

  .ui.grid.chp-footer-mail {
    background-color: ${props => props.theme.mainDarkColor};
    color: ${props => props.theme.whiteColor};
    height: ${props => 2 * props.theme.containerMinHeight / 3}rem;

    &::before {
      background-color: ${props => props.theme.mainDarkColor};
      bottom: 0;
      content: '';
      height: ${props => 2 * props.theme.containerMinHeight / 3}rem;
      left: 0;
      position: absolute;
      top: 0;
      width: 100vw;
    }

    .chp-icon {
      font-size: 3.5rem;
      height: 3.5rem;
      padding-top: 2rem;
    }

    .chp-mail {
      display: block;
      font-size: 2rem;
      line-height: 3.5rem;
    }

    .chp-copy {
      margin-left: 10%;
    }

    a {
      color: ${props => props.theme.whiteColor};
      transition: color .5s;

      &:hover {
        color: ${props => props.theme.mainLightColor};
      }
    }
  }
}

@media all and (max-width: 1200px) {

  .chp-footer-wrapper {
    .ui.grid.chp-footer-mail {
      .chp-copy {
        margin-left: 6.25%;
      }
    }
  }
}

@media all and (max-width: 991px) {

  .chp-footer-wrapper {

    .ui.container.chp-full-width {
      margin: 0 !important;
      width: 100% !important;
    }

    .ui.grid.chp-footer-mail {
      height: ${props => props.theme.containerMinHeight / 3}rem;

      &::before {
        width: 0;
      }

      .chp-copy {
        margin: 0 auto;
        text-align: center;
      }
    }

    .ui.grid.chp-footer-phone {
      margin-top: 0;

      &::before {
        width: 0;
      }
    }

  }

}

@media all and (max-width: 600px) {

  .chp-footer-wrapper {

    .ui.container {
      .row > .four.column {
        text-align: center;
      }
    }

    .ui.grid.chp-footer-mail {
      .chp-icon {
        font-size: 3rem;
        height: 3rem;
        padding-top: 1rem;
      }

      .chp-mail {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }

    .ui.grid.chp-footer-phone {

      .chp-icon {
        font-size: 3rem;
        height: 3rem;
        padding-top: 2.5rem;
      }

      .chp-phone {
        font-size: 1.5rem;
      }
    }
  }
}
`;

export default FooterStyle;