import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bgimage from "../assets/image/redbg.jpg";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { createGlobalStyle } from 'styled-components';

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

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
`;

const OTPPopUp = styled.div`

    width: 400px;
    border-radius: 5px;
    padding: 20px;

    background: rgba(255, 255, 255, 0.7);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`

const Button = styled.button`
    background-color: #ff2c2c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 10px 0px;
    width: 100%;
`

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  
`

function OTPCode() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "111111") {
      navigate("/email");
    } else {
      // Handle invalid OTP input
      alert("Invalid OTP code");
    }
  };
  console.log(otp);
  return (
    <Background
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GlobalStyle />
      <OTPPopUp>
        <form onSubmit={handleOtpSubmit}>
          <label htmlFor="otp">Enter OTP code:</label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              borderColor: "white",
              width: "50px",
              height: "70px",
              fontSize: "20px",
              margin: "20px 5px 20px 5px",
              borderRadius: "5px"
            }}
            containerStyle={{}}
            // renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <ContainerButton><Button>Submit</Button></ContainerButton>
        </form>
      </OTPPopUp>
    </Background>
  );
}

export default OTPCode;
