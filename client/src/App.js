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
import Login from './pages/Login.js';
import Main from './pages/Main';
import MainUser from './pages/MainUser';
import Add from './pages/Add';
import Stats from './pages/Stats.js';
import Register from './pages/Register';
import Discussion from './pages/Discussion';

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

                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Register} />

                <PrivateRoute exact path="/main" component={Main} />
                <PrivateRoute exact path="/discussion" component={Discussion} />
                <PrivateRoute exact path="/statistic" component={Stats} />
                <PrivateRoute exact path="/add" component={Add} />
                <PrivateRoute exact path="/post" component={Main} />
                <PrivateRoute exact path="/post/:category" component={Main} />
                <PrivateRoute exact path="/:user" component={MainUser} />
                <PrivateRoute exact path="/add" component={Add} />
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
