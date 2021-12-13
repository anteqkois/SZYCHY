import React from "react";
import styled from "styled-components";

const StyledContentPost = styled.p`
    ${({ theme }) => theme.typography.Body};
    display:block;
    color:#afafaf;
    margin-top:5px;
    padding: 0 5px;
    text-indent:10px;
    &:hover{
        cursor:default;
    }
`

function ContentPost(props){
    return(
        <StyledContentPost>{props.contentPost}</StyledContentPost>
    );
}

export default ContentPost;