import React from "react";
// import 'Navigation.css';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  padding: ${({ theme }) => theme.spacing.xl1};
  color: ${({ theme }) => theme.colors.textOnBackground};
  ${({ theme }) => theme.typography.H6};
  /* background: linear-gradient(130deg, ${({ theme }) => theme.colors.surface} 20%, ${({ theme }) => theme.colors.primary} 100%); */
  background:#222222;
  width: 300px;
  text-align:left;
  height:100vh;
  padding-top:10vh;
  position:fixed;
`;

const StyledNavItem = styled.a`
    padding: ${({ theme }) => theme.spacing.s};
    display:block;
    opacity: 0.9;
    &:hover{
        cursor:pointer;
        text-decoration: underline white;
        opacity: 1;
    }
`;

const StyledNavLogout = styled.button`
    padding: ${({ theme }) => theme.spacing.s};
    border-radius:10px;
    font-weight:600;
    background: ${({ theme }) => theme.colors.primary};
    display:block;
    width:150px;
    margin-left:10px;
    margin-top:50px;
    font-size:15px;
    color:white;
    &:hover{
        cursor:pointer;
    }
`;

const StyledHeader1 = styled.h1`
    color: ${({ theme }) => theme.colors.textOnBackground};
    ${({ theme }) => theme.typography.H4};
    display:block;
    text-align:center;
    margin-bottom:70px;
`;

function Navbar(){
    return(
       <StyledNavBar>
           <StyledHeader1>NowFuture</StyledHeader1>
           <StyledNavItem>Strona główna</StyledNavItem>
           <StyledNavItem>Panel dyskusyjny</StyledNavItem>
           <StyledNavItem>Zadaj pytanie</StyledNavItem>
           <StyledNavItem>Statystyki</StyledNavItem>
           <StyledNavLogout>Wyloguj się</StyledNavLogout>
       </StyledNavBar>
    );
}

export default Navbar;

// import React from 'react';
// import './Navigation.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';

// function NavBar() {
//     return (
//       <>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route path='/' exact component={Home} />
//             <Route path='/reports' component={Reports} />
//             <Route path='/products' component={Products} />
//           </Switch>
//         </Router>
//       </>
//     );
//   }
  
//   export default NavBar;