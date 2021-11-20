import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import axios from 'axios';
import { UserContext } from './../../providers/UserContext';

const StyledContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: block;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    margin: 1rem;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
    &::placeholder {
      color: #b9abe099;
      font-weight: 100;
      font-size: 1rem;
    }
  }

  button {
    background: #bb86fc;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
  }
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const LoginWith = styled.h5`
  margin: 20px;
  cursor: pointer;
`;

function Login() {
  const { handleLogin } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      handleLogin(values);
    },
    enableReinitialize: true,
  });
  return (
    <StyledContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <WelcomeText>NowFuture</WelcomeText>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Zologuj się !</button>
        <LoginWith>OR LOGIN WITH</LoginWith>
      </StyledForm>
    </StyledContainer>
  );
}

export default Login;
