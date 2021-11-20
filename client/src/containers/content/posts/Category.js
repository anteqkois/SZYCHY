import React from "react";
import styled from "styled-components";

const StyledCategory = styled.h6`
    ${({ theme }) => theme.typography.subtitle1};
    display:inline;
    float:right;
    margin-right:10px;
    color: #fff;
    box-shadow: 0 1px 4px 0 #fff;
    padding: 10px;
    border-radius: 15px;
    &:hover{
        transition: .3s;
        cursor:pointer;
        color: #BB86FC;
        box-shadow: 0 1px 4px 0 #BB86FC;
    }
`;

function Category(props){
    return(
        <StyledCategory>{props.category}</StyledCategory>
    );
}

export default Category;