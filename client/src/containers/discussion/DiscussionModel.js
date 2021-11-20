import React from "react";
import styled from "styled-components";
import Title from "../content/posts/Title";
import ContentPost from "../content/posts/ContentPost";
import User from "../content/posts/User";
import { useState } from "react";
import AddCommentButton from "../content/posts/AddCommentButton";
import Comment from "../content/posts/Comment";

const StyledDiscussion = styled.div` 
    background:#222222;
    width:70%;
    margin:40px auto;
    padding:30px 15px 50px;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px 0 #3700B3;
`;

function DiscussionModel(props){
    const [state, setState] = useState('start');

    return(

        <StyledDiscussion>
            <Title title={props.title}></Title>
            <ContentPost contentPost={props.contentPost}></ContentPost>

            <Comment />

            {state === 'start' && (
                <AddCommentButton addComment={() => setState('add-comment')} />
            )}

            {state === 'add-comment' && <Comment />}

        </StyledDiscussion>
    );
}

export default DiscussionModel;