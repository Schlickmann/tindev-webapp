import styled from "styled-components";

import logo from "../../assets/images/logo.svg";
import itsamatch from "../../assets/images/itsamatch.png";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const LogoMain = styled.img.attrs({
  src: logo,
  alt: "TinDev Logo"
})``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;

export const Empty = styled.div`
  font-size: 32px;
  color: #999;
  font-weight: bold;
  margin-top: 300px;
`;

export const MatchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ItsAMatch = styled.img.attrs({
  src: itsamatch
})``;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px 0;
`;

export const Name = styled.strong`
  font-size: 32px;
  color: #fff;
`;

export const Bio = styled.p`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
`;

export const CloseButton = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;
