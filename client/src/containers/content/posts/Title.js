import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    ${({ theme }) => theme.typography.H5};
`;

function Title(props){
    return(
        <StyledTitle>{props.title}</StyledTitle>
    );
}

export default Title;