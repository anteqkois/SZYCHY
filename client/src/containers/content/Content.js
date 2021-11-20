import React from "react";
import styled from "styled-components";
import Post from "./posts/Post";

const StyledContent = styled.div`
    margin-left:300px;
    color:white;
    text-align: center;
    
`;

function Content(){
    return(
        <StyledContent>
            <Post title="Przykładowy tytuł" contentPost="przykładowa treść posta" category="matematyka"></Post>
        </StyledContent>
    );
}

export default Content;