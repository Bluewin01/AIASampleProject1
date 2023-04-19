import { Form, Input } from "antd";
import styled from "styled-components";
import headerBackground from "../assets/image/redbg.jpg";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${headerBackground});
  background-size: 100% 140px;
  background-repeat: no-repeat;
  background-position: top;
  padding: 80px 20px;
  border: 1px solid grey;
`;

export const FormStyle = styled(Form)`
  background-color: white;
  width: 67%;
  border: 1px solid grey;
  padding: 20px;

  hr {
    margin: 10px 0;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileInfoContainer = styled.div`
  width: 30%;
  background: white;
  border: 1px solid grey;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h3 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const StyledInput = styled(Input)`
  width: 50%;
`;

export const ProfilePicture = styled.div`
  border: 2px solid green;
  width: 50%;
  padding-top: 50%;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
  margin: 10px 0;
  border-bottom: 1px solid grey;

  p {
    font-size: 15px;
    width: 70%;
  }
`;
