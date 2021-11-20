import React, { useContext } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import axios from 'axios';
import { UserContext } from '../../providers/UserContext';

const CommentContainer = styled.form`
  margin-top: 5rem;
  width: 90%;
`;

const Textarea = styled.textarea`
  color: #fff;
  background: #121212;
  box-shadow: 0 2px 4px 0 #3700b3;
  padding: 0.7rem;
  width: 50vw;
  height: 15vh;
  resize: none;
  border: none;
  outline: none;

  &:focus {
    background: #0b0b0b;
  }
`;

const AddButton = styled.button`
  background: #3700b3;
  color: #fff;
  padding-bottom: 30px;
  font-size: 1.7rem;
  width: 38px;
  height: 38px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin: 6.8rem 0 0 2rem;
  position: absolute;
`;

function Comment({ title }) {
  const handleAddPost = async (values) => {
    const nick = sessionStorage.getItem('nick');

    const comment = {
      ...values,
      nick,
      title,
    };

    console.log(comment);

    await axios
      .post('/api/v1/comment', comment)
      .then((data) => {
        window.location.reload();
        // history.push('/post');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      handleAddPost(values);
    },
    enableReinitialize: true,
  });
  return (
    <>
      <CommentContainer onSubmit={formik.handleSubmit}>
        <Textarea
          id="content"
          name="content"
          //required
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        <AddButton type="submit">+</AddButton>
      </CommentContainer>
    </>
  );
}

export default Comment;
