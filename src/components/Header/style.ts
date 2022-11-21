import styled from 'styled-components';
import bg1 from 'img/bg1.jpg';

const HeaderStyle = styled.div`
.chp-header-wrapper {
  background: fixed ${props => props.theme.defaultBgColor} url(${bg1}) top no-repeat;
  background-size: cover;

  .ui.grid {
    .chp-header-element {
      padding: 0;
    }
  }

  .chp-header {
    margin: 0;
    min-height: ${props => props.theme.containerMinHeight}rem;
  }

  .chp-header-text {
    background-color: ${props => props.theme.mainDarkColor};
    height: ${props => 2 * props.theme.containerMinHeight / 3}rem;

    &::before {
      background-color: ${props => props.theme.mainDarkColor};
      bottom: 0;
      content: '';
      height: ${props => 2 * props.theme.containerMinHeight / 3}rem;
      position: absolute;
      right: 0;
      top: 0;
      width: 100vw;
    }

    .chp-icon {
      color: ${props => props.theme.mainLightColor};
      font-size: 5rem;
      height: 5rem;
      padding-top: 2rem;
    }

    .chp-text {
      color: ${props => props.theme.mainLightColor};
      font-size: 2rem;

      h1 {
        color: ${props => props.theme.whiteColor};
        font-family: ${props => props.theme.fontFamily};
        font-size: 3rem;
      }

      a {
        color: ${props => props.theme.mainLightColor};
        transition: color .5s;

        &:hover {
          color: ${props => props.theme.whiteColor};
        }
      }
    }
  }

  .chp-header-phone {
    background-color: ${props => props.theme.mainLightColor};
    height: ${props => props.theme.containerMinHeight / 3}rem;

    &::before {
      background-color: ${props => props.theme.mainLightColor};
      bottom: 0;
      content: '';
      height: ${props => props.theme.containerMinHeight / 3}rem;
      left: 0;
      position: absolute;
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
}

@media all and (max-width: 991px) {

  .chp-header-wrapper {

    .ui.container.chp-full-width {
      margin: 0 !important;
      width: 100% !important;
    }

    .chp-header {
      min-height: auto;
    }

    .chp-header-text {
      height: ${props => props.theme.containerMinHeight / 3}rem;

      &::before {
        width: 0;
      }
    }

    .chp-header-phone {

      &::before {
        width: 0;
      }
    }

  }

}

@media all and (max-width: 600px) {

  .chp-header-wrapper {

    .ui.container {
      .row > .four.column {
        text-align: center;
      }
    }

    .chp-header-text {

      .chp-icon {
        font-size: 4rem;
        height: 4rem;
        padding-top: 2rem;
      }

      .chp-text {
        font-size: 1.5rem;

        h1 {
          font-size: 2.5rem;
        }

        h3 {
          font-size: 2.5rem;
        }
      }
    }

    .ui.chp-header-phone {

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

export default HeaderStyle;