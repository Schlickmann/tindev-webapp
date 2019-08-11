import styled from "styled-components";

import Logo from "../../assets/images/logo.svg";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const LogoMain = styled.img.attrs({
  src: Logo,
  alt: "TinDev Logo"
})``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;
