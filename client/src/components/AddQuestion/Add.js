import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Navbar from '../../containers/navigation/Navigation';

import { useFormik } from 'formik';
import axios from 'axios';
import { UserContext } from './../../providers/UserContext';
import { useHistory } from 'react-router-dom';

const AddQuestion = styled.form`
  float: right;
  width: calc(100% - 300px);
  min-height: 100vh;
  padding-top: 2rem;
  a {
    padding-left: 2rem;
  }
  input {
    background: #222222;
    box-shadow: 0 2px 4px 0 #3700b3;
    border-radius: 2rem;
    width: 800px;
    height: 3rem;
    padding: 1rem;
    margin-left: 2rem;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
      display: inline-block;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
  }
`;

const TopicMessage = styled.a`
  font-weight: 550;
  display: inline-block;
  align-items: center;
  width: 10vw;
  height: 60px;
  font-size: 1.5rem;
`;

const CategoryContainer = styled.div`
  width: 100%;
  margin: 2rem 2rem 0 2rem;
`;

const Category = styled.div`
  display: inline-block;
  font-family: inherit;
  font-size: 1.2rem;
  color: #fff;
  margin-right: 2.5rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 12px;
  background: transparent;
  box-shadow: 0 2px 4px 0 #3700b3;
  cursor: pointer;

  &:focus {
    background: #3700b3;
  }
`;

const Textarea = styled.textarea`
  background: #222222;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  outline: none;
  box-shadow: 0 2px 4px 0 #3700b3;
  width: 80vw;
  height: 60vh;
  resize: none;
  margin: 4rem 2rem;
  padding: 0.5rem;
`;

const AddButton = styled.button`
  background: #3700b3;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 12px;
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

function Add() {
  const [category, setCategory] = useState('matematyka');
  const history = useHistory();

  const { user } = useContext(UserContext);

  const handleAddPost = async (values) => {
    const { nick } = user;

    const post = {
      ...values,
      category,
      nick,
    };

    await axios
      .post('/api/v1/post', post)
      .then((data) => {
        history.push('/post');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      contentPost: '',
      nick: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      handleAddPost(values);
    },
    enableReinitialize: true,
  });
  return (
    <>
      <Navbar />

      <AddQuestion onSubmit={formik.handleSubmit}>
        <TopicMessage>Tytuł:</TopicMessage>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <CategoryContainer>
          <Category tabIndex={1} onClick={() => setCategory('matematyka')}>
            Matematyka
          </Category>
          <Category tabIndex={1} onClick={() => setCategory('polski')}>
            Polski
          </Category>
          <Category tabIndex={1} onClick={() => setCategory('angielski')}>
            Angielski
          </Category>
          <Category tabIndex={1} onClick={() => setCategory('informatyka')}>
            Informatyka
          </Category>
          <Category tabIndex={1} onClick={() => setCategory('programowanie')}>
            Programowanie
          </Category>
          <Category tabIndex={1} onClick={() => setCategory('mechatronika')}>
            Mechatronika
          </Category>
        </CategoryContainer>
        <Textarea
          id="contentPost"
          name="contentPost"
          //required
          onChange={formik.handleChange}
          value={formik.values.contentPost}
        />
        <AddButton type="submit">+</AddButton>
      </AddQuestion>
    </>
  );
}

export default Add;
