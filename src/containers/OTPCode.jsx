import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bgimage from "../assets/image/redbg.jpg";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { otpSuccess } from "../stores/redux/slices/userSlice"

function OTPCode() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleOtpSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const body = {
      otp: otp
    }
    try {
      await axios.post("http://localhost:5000/api/v1/user/otp", body, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch(otpSuccess(otp))
      navigate("/email")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Background>
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

export default OTPCode;
