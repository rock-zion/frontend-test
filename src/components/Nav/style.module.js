import styled from "styled-components";

export const NavigationStyle = styled.header`
  height: 70px;
  width: 100%;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;

  .logo {
    height: 80%;
  }

  .menu {
    display: none;
  }

  .mobileMenuCloseIcon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 32px;

    .menu {
      height: 32px;
      display: block;
    }

    .mobileMenuCloseIcon {
      position: absolute;
      height: 32px;
      top: 19px;
      right: 24px;
    }

    .mobileMenu {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      background-color: #0b213c;
      transition: all 0.3s;
    }

    .mobileMenuOpen {
      transform: translateX(0);
      opacity: 1;
    }

    .mobileMenuClose {
      transform: translateX(100vw);
      opacity: 0;
    }
  }
`;
