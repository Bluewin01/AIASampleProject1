import { Button } from "antd";
import styled from "styled-components";

export const ButtonStyled = styled(Button)`
  background: #db0026;
  border-radius: 0;
  color: white;

  &:hover {
    background: #ae0736 !important;
    color: white !important;
  }
`;
