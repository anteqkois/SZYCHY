import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledHeader = styled.div`
  background: #0b0b0b;
  margin-left: 300px;
  color: black;
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 300px);
  padding: 0.5vw 2vw;
  position: sticky;
  /* display:flex;
    justify-content: space-between;
    align-items: center; */
`;

const HeaderButton = styled.div`
  ${({ theme }) => theme.typography.H6};
  width: 100%;
  display: inline;
  padding: 5px;
  margin: 15px;
  color: white;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

function Header() {
  const reload = () => {
    window.location.reload();
  };

  const history = useHistory();
  return (
    <StyledHeader>
      <HeaderButton
        onClick={() => {
          history.push('/post/matematyka');
          reload();
        }}
      >
        Matematyka
      </HeaderButton>
      <HeaderButton
        onClick={() => {
          history.push('/post/polski');
          reload();
        }}
      >
        Polski
      </HeaderButton>
      <HeaderButton
        onClick={() => {
          history.push('/post/angielski');
          reload();
        }}
      >
        Angielski
      </HeaderButton>
      <HeaderButton
        onClick={() => {
          history.push('/post/programowanie');
          reload();
        }}
      >
        Programowanie
      </HeaderButton>
      <HeaderButton
        onClick={() => {
          history.push('/post/informatyka');
          reload();
        }}
      >
        Informatyka
      </HeaderButton>
      <HeaderButton
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
