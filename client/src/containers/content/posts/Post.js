import React from "react";
import ContentPost from "./ContentPost";
import Title from "./Title";
import Category from "./Category";
import styled from "styled-components";

const StyledPost = styled.div`
    background:#0d1117;
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
