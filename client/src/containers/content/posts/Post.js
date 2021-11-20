import React from "react";
import ContentPost from "./ContentPost";
import Title from "./Title";
import Category from "./Category";
import styled from "styled-components";

const StyledPost = styled.div`
    background:#222222;
    width:70%;
    margin:30px auto;
    padding:15px;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px 0 #3700B3;
`;

function Post(props){
    return(
        <StyledPost>
            <Title title={props.title}></Title>
            <Category category={props.category}></Category>
            <ContentPost contentPost={props.contentPost}></ContentPost>
        </StyledPost>
    );
}
export default Post;
