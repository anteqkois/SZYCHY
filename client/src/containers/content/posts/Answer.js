import React from "react";
import styled from "styled-components";

const StyledAnswer = styled.span`
    margin-top:10px;
    float:right;
    margin-right:50px;
    &:hover{
        cursor:pointer;
    }
`;

function Answer(){
    return(
        <StyledAnswer>Odpowiedz</StyledAnswer>
    );
}

export default Answer;