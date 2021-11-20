import React from "react";
import styled from "styled-components";

const StyledCategory = styled.h6`
    ${({ theme }) => theme.typography.subtitle1};
`;

function Category(props){
    return(
        <StyledCategory>{props.category}</StyledCategory>
    );
}

export default Category;