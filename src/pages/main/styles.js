import styled from "styled-components";

import Logo from "../../assets/images/logo.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoMain = styled.img.attrs({
  src: Logo,
  alt: "TinDev Logo"
})``;
