import styled from "styled-components";

export const MovieCardStyle = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #5d636c;
  padding-top: 24px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  .episode,
  .movieTitle {
    color: #ffe300;
  }

  .cardIcon {
    width: 70%;
  }

  .episode {
    display: block;
    margin: 8px 0;
  }

  .director {
    font-style: 16px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .learnMore {
    width: 70%;
  }
`;
