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
import logout from '../../icons/logout.png';
import user from '../../icons/user.png';

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
  .ss {
    position: absolute;
    left: -7px;
    top: 6px;
  }
  span {
    padding-left: 20px;
  }
  .logoText {
    margin-bottom: 50px;
    cursor: pointer;
  }
  .logo {
    position: fixed;
    bottom: 50px;
  }
`;

const StyledNavItem = styled.a`
  color: #d3d3d3;
  display: block;
  opacity: 0.9;
  margin-bottom: 1rem;
  padding: 10px 10px;
  border-radius: 10px;
  background: linear-gradient(to right, transparent, #3700b3 90%);
  text-decoration: none;
  position: relative;
  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, transparent, #3700b3 40%);
    color: white;
    opacity: 1;
  }
`;

const StyledNavLogout = styled.button`
  color: #d3d3d3;
  display: block;
  opacity: 0.9;
  margin-bottom: 1rem;
  padding: 10px 10px;
  border-radius: 10px;
  background: #3700b3;
  border:none;
  width:100%;
  text-decoration: none;
  position: relative;
  &:hover {
    cursor: pointer;
    color: white;
    transition: 200ms;
    opacity: 1;
  }
  .ss{
    position:absolute;
    top:8px;
    left:10px;
  }
`;

const MessageContainer = styled.div`
  padding: 1rem;
  display: block;
  font-size: 15px;
  margin-top: 2rem;
  width: 100%;
  color: white;
  outline: none;
  border-radius: 10px;
  transition: 200ms;
`;
const Message = styled.p`
  font-size: 1rem;
`;

const UsernameContainer = styled.div`
  padding: 0 1rem 0 1rem;
  display: block;
  font-size: 15px;
  margin-top: -1rem;
  width: 100%;
  color: white;
  outline: none;
  border-radius: 10px;
  transition: 200ms;
`;

const Username = styled.p`
  font-size: 1rem;
  color: white;
`;

function Navbar() {
  const history = useHistory();
  const nick = sessionStorage.getItem('nick');

  const { handleLogout } = useContext(UserContext);
  return (
    <StyledNavBar>
      <img
        src={logoText}
        onClick={() => history.push('/post')}
        className="logoText"
        alt="logoText"
      />

      <StyledNavItem onClick={() => history.push('/post')}>
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
      <StyledNavItem onClick={() => history.push(`/${nick}`)}>
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
        <img src={logout} className="ss" alt="icon" />
        Wyloguj się
      </StyledNavLogout>

      <MessageContainer>
        <Message className="text-center">Zalogowano jako:</Message>
      </MessageContainer>
      <UsernameContainer className="text-center">
        <img src={user} alt="logo" className="userIcon me-2"/>
        <Username className="userIcon d-inline">{nick}</Username>
      </UsernameContainer>

      <img src={logo} alt="logo" className="logo" />
    </StyledNavBar>
  );
}

export default Navbar;
