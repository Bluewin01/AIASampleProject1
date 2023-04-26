import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import image from "../assets/image/IMG_0291.png";
import bgimage from "../assets/image/redbg.jpg";
import { useFormik } from 'formik';
import { loginSchema } from "../utils/yups";
import { Form } from "antd"
import baseApi from "../networks/baseApi";
import { loginSuccess } from "../stores/redux/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function login(e) {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/user/login", e);
      const token = response.data.bearer_token
      localStorage.setItem("token", token)
      dispatch(loginSuccess(token));
      navigate("otp")

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (e) => {
      login(e)
      // console.log(formValues)
    }
  })

  const yupSync = {
    async validator({ field }, value) {
      await loginSchema.validateSyncAt(field, { [field]: value })
    }
  }

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });

  //   formik.handleChange(event)
  // };

  return (
    <Background>
      <div className="container">
        <FormSubmit onFinish={formik.handleSubmit}>
          <ImageLogo>
            <img src={image} alt="logo" />
          </ImageLogo>
          <FormLabel>Email:</FormLabel>
          <FormSubmit.Item
            name="email"
            rules={[yupSync]}
          >
            <InputStyled
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </FormSubmit.Item>

          <FormLabel>Password:</FormLabel>
          <FormSubmit.Item
            name="password"
            rules={[yupSync]}
          >
            <InputStyled
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </FormSubmit.Item>
          <Button type="submit">Log In</Button>
        </FormSubmit>
      </div>
    </Background>
  );
}

// Styled Components
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

const FormSubmit = styled(Form)`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 400px;
  height: 500px;
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

  .ant-form-item-control-input-content {
    margin: -10px 0;
  }
`;

const ImageLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;

  img {
    height: 100%;
    width: auto;
  }
`;

const FormLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 10px 0px;
`;

const InputStyled = styled.input`
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


export default Login;
