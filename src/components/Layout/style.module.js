import styled from "styled-components";

export const PagesLayoutStyles = styled.div`
  .page-banner {
    background: #000;
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .bgImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bannerText {
    z-index: 9;
    color: #ffe820;
    font-size: 128px;
  }

  .children {
    width: 100%;
    height: fit-content;
    padding: 64px 120px;
    background-color: #0d1116;
  }

  .movieContainerParent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
  }

  .loadingContainer {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .page-banner {
      height: 200px;
    }

    .movieContainerParent {
      grid-template-columns: 1fr;
    }

    .bannerText {
      font-size: 64px;
    }

    .children {
      width: 100%;
      padding: 24px 32px;
    }
  }
`;

export const ButtonFavouriteLayoutStyle = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 80%;
  }
`;
