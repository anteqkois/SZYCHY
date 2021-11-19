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
<<<<<<< HEAD
import Test from './components/Test';
import Main from "./pages/Main";
=======
import Login from './components/Login/Login';
>>>>>>> 986007d82dd30093504171ec63f147f4f7d5fad4

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
<<<<<<< HEAD
              <PrivateRoute path="/admin" component={<h1>Admin</h1>} />
              {/* <Route exact path="/" component={Test} /> */}
              <Route exact path="/" component={Main} />
              <Route path="*" component={NotFound} />
=======
              {/* <PrivateRoute path="/admin" component={<h1>Admin</h1>} /> */}
              <Route exact path="/" component={Login} />
              {/* <Route path="*" component={NotFound} /> */}
>>>>>>> 986007d82dd30093504171ec63f147f4f7d5fad4
            </Switch>
          </MainLayout>
        </ErrorProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
