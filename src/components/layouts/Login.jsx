import React, { useState } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import image from "../../assets/IMG_0291.png";
import bgimage from "../../assets/redbg.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
`;

const Background = styled.div`
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormSubmit = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 400px;
  /* background-color: white; */
  border-radius: 5px;
  padding: 20px;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);  */
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ImageLogo = styled.div`
  padding: 0px 0px 25px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelUsername = styled.label`
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 10px 0px;
`;

const LabelPassword = styled.label`
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 10px 0px;
`;

const InputName = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  width: 95%;
`;

const InputPassword = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  width: 95%;
`;

const Button = styled.button`
  background-color: #ff2c2c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  width: 100%;
  padding: 10px 0;
`;

const ContainerButton = styled.div``;
function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleUsernameChange = (event) => {
  // setUsername(event.target.value);
  // const { name, value } = event.target;
  // setU({
  //   ...formValues,
  //   [name]: value
  // });
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // setShowOtpPopup(true);
    navigate("/otp");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Background>
      <GlobalStyle />
      <div className="container">
        <FormSubmit onSubmit={handleSubmit}>
          <ImageLogo>
            <img src={image} alt="logo" />
          </ImageLogo>
          <LabelUsername>Username:</LabelUsername>
          <InputName
            type="text"
            // id="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />

          <LabelPassword>Password:</LabelPassword>
          <InputPassword
            type="password"
            // id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />

          <ContainerButton>
            <Button>Log In</Button>
          </ContainerButton>
        </FormSubmit>
      </div>
    </Background>
  );
}

export default Login;
