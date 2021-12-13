import React from "react";
import styled from "styled-components";
import Title from "../../components/utils/Title";
import ContentPost from "../../components/utils/ContentPost";
import User from "../../components/utils/User";
import { useState } from "react";
import AddCommentButton from '../../components/utils/AddCommentButton';
import Comment from "./Comment";

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

            {/* <AddComment /> */}

            {state === 'start' && (
                <AddCommentButton addComment={() => setState('add-comment')} />
            )}

            {state === 'add-comment' && <Comment />}

        </StyledDiscussion>
    );
}

export default DiscussionModel;