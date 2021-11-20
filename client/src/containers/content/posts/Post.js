import React from 'react';
import ContentPost from './ContentPost';
import Title from './Title';
import Category from './Category';
import styled from 'styled-components';
import User from './User';
import Answer from './Answer';
import Comment from './Comment';
import AddComment from './AddComment';
import AddCommentButton from './AddCommentButton';
import AddCloseCommentButton from './CloseAddCommentButton';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StyledPost = styled.div`
  background: #222222;
  width: 70%;
  margin: 40px auto;
  padding: 30px 15px 50px;
  border: none;
  outline: none;
  box-shadow: 0 2px 4px 0 #3700b3;
`;

function Post(props) {
  const [state, setState] = useState('start');
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/v1/comment/${props.title}`);
      console.log(data);
      setComments(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <StyledPost>
      <User user={props.user}></User>
      <Category category={props.category}></Category>
      <Title title={props.title}></Title>
      <ContentPost contentPost={props.contentPost}></ContentPost>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        comments.map(({ title, nick, content }) => (
          <AddComment content={content} nick={nick} />
        ))
      )}

      {state === 'start' && (
        <AddCommentButton addComment={() => setState('add-comment')} />
      )}

      {state === 'add-comment' && <Comment title={props.title} />}
    </StyledPost>
  );
}
export default Post;
