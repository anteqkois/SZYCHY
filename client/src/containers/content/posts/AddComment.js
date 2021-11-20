import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  margin-top: 5rem;
  width: 90%;
`;

const Textarea = styled.div`
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

function AddComment({ nick, content }) {
  return (
    <>
      <CommentContainer>
        {nick}
        <Textarea>{content}</Textarea>
      </CommentContainer>
    </>
  );
}

export default AddComment;
