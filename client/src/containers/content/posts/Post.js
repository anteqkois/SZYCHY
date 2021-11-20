import React from "react";
import ContentPost from "./ContentPost";
import Title from "./Title";
import Category from "./Category";
import styled from "styled-components";
import User from "./User";
import AddComment from "./AddComment";
import AddCommentButton from "./AddCommentButton";
import Comment from "./Comment";
import AddCloseCommentButton from './CloseAddCommentButton'
import { useState } from "react";

const StyledPost = styled.div`
    background:#222222;
    width:70%;
    margin:40px auto;
    padding:20px;
    padding-bottom:50px;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px 0 #3700B3;
`;

function Post(props){
    const [state, setState] = useState('start'); 

    return(
        <StyledPost>
            <User user={props.user}></User>
            <Category category={props.category}></Category>
            <Title title={props.title}></Title>
            <ContentPost contentPost={props.contentPost}></ContentPost>

            <Comment />
            {state === 'start' && (
                <AddCommentButton addComment={() => setState('add-comment')} />
            )}
            {state === 'add-comment' && <AddComment />}
        </StyledPost>
    );
}
export default Post;
