import styled from "styled-components";
import { Form } from "antd";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`;

export const FormContainer = styled.div`
  width: 35%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`;

export const FormStyle = styled(Form)`
  width: 60%;
`;
