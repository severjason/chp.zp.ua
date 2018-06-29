import styled from 'styled-components';

const PartnersStyle = styled.div`
.chp-partners-wrapper {
  background: ${props => props.theme.whiteColor};
  padding: ${props => props.theme.imgMargin}rem 0;

  .ui.container.chp-partners-container {
    .column img {
      // max-width: 21.4rem;
      padding: 1rem;
    }
  }
}

@media all and (max-width: 991px) {

  .chp-partners-wrapper {
    .ui.container.chp-partners-container {
      .column {
        width: 100%;
      }

      .column img {
        display: block;
        margin: 1rem auto;
      }
    }
  }

}

@media all and (max-width: 400px) {

  .chp-partners-wrapper {
    .ui.container.chp-partners-container {
      .column img {
        max-width: 100%;
      }
    }
  }

}

`;

export default PartnersStyle;
