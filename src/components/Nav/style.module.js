import styled from "styled-components";
import backgroundShimmer from "../../assets/icons/bg-shimmer.gif";

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

  .mobileMenu {
    display: none;
  }

  .webMenuLink {
    color: #ffffff;
    margin-right: 8px;
    text-decoration: none;
    padding: 8px 0;
    margin-right: 32px;
    transition: all 0.2s;
  }

  .webMenuLink:last-child {
    margin-right: 0;
  }

  .webMenuLinkActive,
  .webMenuLink:hover {
    background-image: url(${backgroundShimmer});
    background-size: cover;
    margin-right: 32px;
    text-decoration: none;
    transform: scale(1.1);
    border-bottom: 2px solid red;
  }

  .mobileMenuCloseIcon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 32px;

    .webMenu {
      display: none;
    }

    .droid {
      position: absolute;
      height: 300px;
      bottom: 0;
      right: 0;
    }

    .mobileLinkContainer {
      margin: 100px 0 0 32px;
      display: flex;
      flex-direction: column;
    }

    .mobileLink {
      margin-bottom: 32px;
      font-weight: 700;
      font-size: 24px;
      color: #ffffff;
      text-decoration: none;
    }

    .menu {
      height: 32px;
      display: block;
    }

    .mobileMenuCloseIcon {
      display: block;
      position: absolute;
      height: 32px;
      top: 19px;
      right: 24px;
    }

    .mobileMenu {
      display: block;
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
