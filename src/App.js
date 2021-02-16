import React, { useEffect } from 'react';
import './components/style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AOS from 'aos';

import Home from './containers/Home';
import Login from './containers/Auth/Login';
import SignUp from './containers/Auth/SignUp';
import SignUpTeacher from './containers/Auth/SignUp/Teacher';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={Login} />
          <Route path='/Signup' component={SignUp} />
          <Route path='/SignTeacher' component={SignUpTeacher} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
