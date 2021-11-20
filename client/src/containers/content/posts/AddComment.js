import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  background: #191919;
  border-radius: 10px;
  margin-top: 5rem;
  width: 90%;
`;

const TextContainer = styled.div`
  color: #fff;
  padding: 0.7rem;
  width: 50vw;
  height: 15vh;
  resize: none;
  border: none;
  outline: none;
`;

const NickContainer = styled.div`
  color: #BB86FC;
  width: 50vw;
  padding: 0.7rem;
  border: none;
`;

function AddComment({ nick, content }) {
  return (
    <>
      <CommentContainer>
        <NickContainer>{nick}</NickContainer>
        <TextContainer>{content}</TextContainer>
      </CommentContainer>
    </>
  );
}

export default AddComment;
