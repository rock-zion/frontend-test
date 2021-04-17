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
    padding: 64px 120px;
    color: #333333;
  }

  @media only screen and (max-width: 600px) {
    .page-banner {
      height: 200px;
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
