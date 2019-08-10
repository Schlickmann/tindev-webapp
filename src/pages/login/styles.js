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

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #999;
  }
  :-ms-input-placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  width: 100%;
  background-color: #df4723;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
