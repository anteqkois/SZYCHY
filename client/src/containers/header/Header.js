import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background:#0b0b0b;
    margin-left:300px;
    color:black;
    position:fixed;
    padding:20px;
    display:flex;
    justify-content: space-between;
    width:calc(100% - 300px);
    padding:0.5vw 2vw;
    position: sticky;
    /* display:flex;
    justify-content: space-between;
    align-items: center; */
    `;

const HeaderButton = styled.div`
    ${({ theme }) => theme.typography.H6};
    width:100%;
    display:inline;
    padding:5px;
    margin:15px;
    color:white;
    opacity:0.9;
    &:hover{
        cursor:pointer;
        opacity: 1;
    }
`;

function Header(){
    return(
        <StyledHeader>
            <HeaderButton>Matematyka</HeaderButton>
            <HeaderButton>Polski</HeaderButton>
            <HeaderButton>Angielski</HeaderButton>
            <HeaderButton>Programowanie</HeaderButton>
            <HeaderButton>Informatyka</HeaderButton>
            <HeaderButton>Mechatronika</HeaderButton>
        </StyledHeader>
    );
}

export default Header;