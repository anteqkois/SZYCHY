import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from './../../providers/UserContext';
import { useHistory } from 'react-router-dom';
import logo from '../../img/logo.png';
import logoText from '../../img/logoText.png';
import homeIcon from '../../icons/homeIcon.png';
import discuss from '../../icons/discuss.png';
import notes from '../../icons/notes.png';
import question from '../../icons/question.png';
import results from '../../icons/results.png';

const StyledNavBar = styled.div`
  padding: ${({ theme }) => theme.spacing.xl1};
  ${({ theme }) => theme.typography.H6};
  /* background: linear-gradient(130deg, ${({ theme }) =>
    theme.colors.surface} 20%, ${({ theme }) => theme.colors.primary} 100%); */
  background: #0b0b0b;
  width: 300px;
  text-align: left;
  height: 100%;
  padding-top: 30px;
  position: fixed;
  .ss{
    position:absolute;
    left:-7px;
    top:6px;
  }
  span{
    padding-left:20px;
  }
  .logoText{
    margin-bottom:50px;
  }
  .logo{
    position:fixed;
    bottom:50px;
  }
`;

const StyledNavItem = styled.a`
  display: block;
  opacity: 0.9;
  margin-bottom:10px;
  padding:10px 10px;
  background: linear-gradient(to right,transparent, rgba(13, 110, 253,0.25) 90%);
  text-decoration:none;
  position:relative;
  &:hover {
    cursor: pointer;
    color:white;
    transition: 200ms;
    opacity: 1;
  }
`;

const StyledNavLogout = styled.button`
  padding: ${({ theme }) => theme.spacing.s};
  border-radius: 2px;
  display: block;
  font-size: 15px;
  width:100%;
  color: white;
  background-color: #0d6efd;
  outline:none;
  border:1px solid #0d6efd;
  transition: 200ms;
  &:hover {
    background-color: transparent;
    color:#0d6efd;
    border:1px solid #0d6efd;
    cursor: pointer;
  }
`;

function Navbar() {
  const history = useHistory();

  const { handleLogout } = useContext(UserContext);
  return (
    <StyledNavBar>
      <img src={logoText} className="logoText" alt="logoText" />

      <StyledNavItem onClick={() => history.push('/main')}>
        <img src={homeIcon} className="ss" alt="icon" />
        <span>Strona główna</span>
      </StyledNavItem>
      <StyledNavItem onClick={() => history.push('/discussion')}>
        <img src={discuss} className="ss" alt="icon" />
        <span>Panel dyskusyjny</span>
      </StyledNavItem>
      <StyledNavItem onClick={() => history.push('/add')}>
        <img src={question} className="ss" alt="icon" />
        <span>Zadaj pytanie</span>
      </StyledNavItem>
      <StyledNavItem onClick={() => history.push('/mypost')}>
        <img src={notes} className="ss" alt="icon" />
        <span>Moje wpisy</span>
      </StyledNavItem>
      <StyledNavItem onClick={() => history.push('/statistic')}>
        <img src={results} className="ss" alt="icon" />
        <span>Statystyki</span>
      </StyledNavItem>
      <StyledNavLogout
        onClick={() => {
          handleLogout();
        }}
      >
        Wyloguj się
      </StyledNavLogout>
      <img src={logo} alt="logo" className="mt-5 logo" />
    </StyledNavBar>
  );
}

export default Navbar;
