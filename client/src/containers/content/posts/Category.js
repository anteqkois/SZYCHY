import React from "react";
import styled from "styled-components";

const StyledCategory = styled.h6`
    ${({ theme }) => theme.typography.subtitle1};
    display:inline;
    float:right;
    margin-right:10px;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.primary};
    padding: 0 5px;
    &:hover{
        cursor:pointer;
    }
`;

function Category(props){
    return(
        <StyledCategory>{props.category}</StyledCategory>
    );
}

export default Category;