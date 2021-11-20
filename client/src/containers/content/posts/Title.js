import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    ${({ theme }) => theme.typography.H5};
    text-align: left;
    padding-left:50px;
    margin-top: 1.2rem;
    &:hover{
        cursor:default;
    }
`;

function Title(props){
    return(
        <StyledTitle>{props.title}</StyledTitle>
    );
}

export default Title;