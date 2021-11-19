import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';
import Login from './components/Login/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem('isLogined') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      )
    }
  />
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ErrorProvider>
          <MainLayout>
            <ScrollToTop />
            <Switch>
              {/* <PrivateRoute path="/admin" component={<h1>Admin</h1>} /> */}
              <Route exact path="/" component={Login} />
              {/* <Route path="*" component={NotFound} /> */}
              <Route exact path="/add" component={Add} />
            </Switch>
          </MainLayout>
        </ErrorProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
