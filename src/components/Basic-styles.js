import { Button } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const ButtonStyled = styled(Button)`
  background: #db0026;
  border-radius: 0;
  color: white;

  &:hover {
    background: #ae0736 !important;
    color: white !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
`;
