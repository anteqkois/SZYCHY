import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

    @media screen and (max-width: 764px) {
      margin-left: 0;
      width: 100%;
  }
`

const HeaderButton = styled.a`
  ${({ theme }) => theme.typography.H6};
  width: 100%;
  display: inline;
  padding: 5px;
  margin: 15px;
  color: white;
  opacity: 0.9;
  text-align:center;
  border-bottom: 2px solid transparent;
  text-decoration:none;
  &:active{
    color: #BB86FC;
  }
  &:hover {
    transition: 200ms all;
    cursor: pointer;
    opacity: 1;
    border-bottom: 2px solid #3700b3;
  }
`;

function Header() {
  const reload = () => {
    window.location.reload();
  };

  const history = useHistory();
  return (
    <StyledHeader>
      <HeaderButton className="route"
        onClick={() => {
          history.push('/post/matematyka');
          reload();
        }}
      >
        Matematyka
      </HeaderButton>
      <HeaderButton className="route"
        onClick={() => {
          history.push('/post/polski');
          reload();
        }}
      >
        Polski
      </HeaderButton>
      <HeaderButton className="route"
        onClick={() => {
          history.push('/post/angielski');
          reload();
        }}
      >
        Angielski
      </HeaderButton>
      <HeaderButton className="route"
        onClick={() => {
          history.push('/post/programowanie');
          reload();
        }}
      >
        Programowanie
      </HeaderButton>
      <HeaderButton className="route"
        onClick={() => {
          history.push('/post/informatyka');
          reload();
        }}
      >
        Informatyka
      </HeaderButton>
      <HeaderButton className="route"
        onClick={() => {
          history.push('/post/mechatronika');
          reload();
        }}
      >
        Mechatronika
      </HeaderButton>
    </StyledHeader>
  );
}

export default Header;
