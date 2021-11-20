import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from './posts/Post';
import axios from 'axios';

const StyledContent = styled.div`
  margin-left: 300px;
  color: white;
  margin-top: 60px;
`;

const initialPost = [
  {
    title: 'tytuł',
    category: 'matematyka',
    contentPost: 'hfnriufnr frewufnerf fnru ',
    nick: 'misiek12345',
  },
];

function ContentUser({user}) {
  const [post, setPost] = useState(initialPost);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/v1/post/user/${user}`);
      console.log(await axios.get(`/api/v1/post/user/${user}`));
      setPost(data);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <StyledContent>
      {post.map(({ title, nick, contentPost, category }) => (
        <Post
          title={title}
          user={nick}
          contentPost={contentPost}
          category={category}
        ></Post>
      ))}
    </StyledContent>
  );
}

export default ContentUser;
