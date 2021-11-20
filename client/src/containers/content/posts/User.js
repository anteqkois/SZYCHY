import React from "react";
import styled from "styled-components";

const StyledUser = styled.span`
    float:right;
    margin-right:40px;
    margin-top:10px;
    &:hover{
        cursor:default;
    }
`;
const StyledAsked = styled.span`
    color: #ffffff;
    margin-right:5px;
`;

const StyledUsername = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`;

function User(props){
    return(
        
        <StyledUser>
            <StyledAsked>Zapytał: </StyledAsked>
            <StyledUsername>{props.user}</StyledUsername>
        </StyledUser>
    );
}

export default User;