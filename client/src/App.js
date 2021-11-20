import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';
import { UserProvider } from './providers/UserContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';

// import NotFound from './components/utils/NotFound';
import Login from './components/NewLogin/Login.js';
import Main from './pages/Main';
import Add from './components/AddQuestion/Add';
import Stats from './components/Stats/Stats';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem('isLogined') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <UserProvider>
          <ErrorProvider>
            <MainLayout>
              <ScrollToTop />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/statistic" component={Stats} />
                {/* <PrivateRoute exact path="/add" component={Add} />
                <PrivateRoute exact path="/main" component={Main} />
                <PrivateRoute exact path="/add" component={Add} /> */}
                {/* <Route path="*" component={NotFound} /> */}
              </Switch>
            </MainLayout>
          </ErrorProvider>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
