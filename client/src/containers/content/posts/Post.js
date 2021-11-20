import React from "react";
import ContentPost from "./ContentPost";
import Title from "./Title";
import Category from "./Category";
import styled from "styled-components";
import User from "./User";
import Answer from "./Answer";

const StyledPost = styled.div`
    background:#222222;
    width:70%;
    margin:40px auto;
    padding:30px 15px 50px;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px 0 #3700B3;
`;

function Post(props){
    return(
        <StyledPost>
            <Category category={props.category}></Category>
            <Title title={props.title}></Title>
            <ContentPost contentPost={props.contentPost}></ContentPost>
            <User user={props.user}></User>
            <Answer/>
        </StyledPost>
    );
}
export default Post;
