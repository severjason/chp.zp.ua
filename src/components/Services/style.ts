import styled from 'styled-components';

const ServicesStyle = styled.div`
  .chp-services-wrapper {
    background: ${props => props.theme.whiteColor};
    padding: ${props => props.theme.imgMargin}rem 0;

    .chp-services-container {
      min-height: ${props => props.theme.containerMinHeight};

      h3 {
        color: ${props => props.theme.mainDarkColor};
        font-size: 4rem;
        padding-top: ${props => props.theme.imgMargin / 2}rem;
        text-align: center;
      }

      .numeration {
        color: ${props => props.theme.mainLightColor};
        font-size: 2.5rem;
      }

      .chp-service-text {
        color: ${props => props.theme.mainDarkColor};
        font-size: 2rem;
        line-height: 2.2rem;
        word-break: break-word;
      }
    }
  }

  @media all and (max-width: 600px) {

    .chp-services-wrapper {

      .ui.container.chp-services-container {
        .column {
          width: 100%;
        }
      }
    }
  }

`;

export default ServicesStyle;
