import React from "react";
import styled from "styled-components";

const StyledContentPost = styled.p`
    ${({ theme }) => theme.typography.Body};
    display:block;
    color:white;
`

function ContentPost(props){
    return(
        <StyledContentPost>{props.contentPost}</StyledContentPost>
    );
}

export default ContentPost;