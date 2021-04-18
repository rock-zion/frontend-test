import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: fit-content;
  border: 1px solid #5d636c;
  padding: 24px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .subTexts,
  .headingText {
    color: #ffe300;
    text-align: center;
  }

  .detailsContainer {
    width: 100%;
    flex: 1;
    display: inherit;
    justify-content: space-between;
    flex-direction: inherit;
    align-items: inherit;

    & div {
      display: inherit;
      flex-direction: inherit;
      align-items: inherit;
    }
  }

  .cardIcon {
    width: 70%;
    margin-bottom: 32px;
  }

  .subTexts {
    display: block;
    margin: 4px 0;
  }

  .body1 {
    font-style: 16px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .learnMore {
    width: 70%;
    margin-bottom: 16px;
  }
  .characterIcon {
    height: 200px;
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 600px) {
    .headingText {
      font-size: 18px;
    }
  }
`;
