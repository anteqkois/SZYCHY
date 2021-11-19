import React from "react";
import styled from "styled-components";

const StyledHeader1 = styled.h1`
    color: ${({ theme }) => theme.colors.textOnBackground};
    ${({ theme }) => theme.typography.H4};
    margin-left:300px;
    padding:20px;
    padding-left:100px;
    border-bottom:2px solid white;
    display:block;
    width:100vw;
`;


function Header(){
    return(
        <StyledHeader1>NowFuture</StyledHeader1>
    );
}

export default Header;