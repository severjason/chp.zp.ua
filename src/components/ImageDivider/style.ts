import styled from 'styled-components';
import bg2 from 'img/bg2.jpg';
import bg3 from 'img/bg3.jpg';

const ImageDividerStyle = styled.div`
.chp-image-divider-wrapper {

  &.chp-image-mountain {
    background: fixed ${props => props.theme.defaultBgColor} url(${bg2}) top no-repeat;
    background-size: cover;
  }

  &.chp-image-maintenance {
    background: fixed ${props => props.theme.defaultBgColor} url(${bg3}) top no-repeat;
    background-size: cover;
  }
}

.chp-image-divider-container {

  .ui.grid.chp-image-divider {
    margin: 0;
    min-height: ${props => props.theme.imgHeight}rem;

    .column {
      padding: 0;
    }

    img {
      box-shadow: ${props => props.theme.imgBoxShadow};
      display: block;
      height: auto;
      margin: ${props => props.theme.imgMargin / 2}rem auto;
      position: relative;
      width: 80%;
    }

    .chp-image-text {
      color: ${props => props.theme.whiteColor};
      text-align: left;

      h4 {
        font-family: ${props => props.theme.fontFamily};
        font-size: 4rem;
        margin-top: ${props => props.theme.imgMargin / 2}rem;
      }
    }
  }
}

@media all and (min-width: 1800px) {
  .chp-image-divider-container .ui.grid.chp-image-divider {

    .chp-image-text {
      padding-right: ${props => 3 * props.theme.imgMargin / 2}rem;

      &::before {
        border-top: 3px solid ${props => props.theme.mainLightColor};
        bottom: -5%;
        content: '';
        left: 80%;
        position: absolute;
        transform: translateY(-50%);
        width: 70%;
        z-index: 100;
      }
    }

    img {
      height: ${props => props.theme.imgHeight}rem;
      margin-top: ${props => props.theme.imgMargin / 2}rem;
      position: absolute;
      width: ${props => props.theme.imgWidth}rem;
    }

    &.right {
      .chp-image-text {
        padding-left: ${props => 3 * props.theme.imgMargin / 2}rem;

        &::before {
          left: -50%;
        }
      }
    }
  }
}

@media all and (max-width: 991px) {

  .ui.grid.chp-image-divider {
    &.right {
      flex-direction: column-reverse;
    }

    .chp-image-text {
      h4 {
        text-align: center;
      }
    }
  }
}

@media all and (max-width: 600px) {

  .chp-image-divider-container {

    .ui.grid.chp-image-divider {

      .chp-image-text {
        word-break: break-word;
      }

      .chp-image-text h4 {
        font-size: 2.5rem;
      }
    }
  }
}


`;

export default ImageDividerStyle;