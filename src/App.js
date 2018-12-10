import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Login'),
  loading
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  };

  authenticate(cb) {
    this.setState({isAuthenticated:true});
  }

  signout(cb) {
    this.setState({isAuthenticated:false});
  };

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} onLogin={(e) => this.authenticate(e)}/>}/>
            { this.state.isAuthenticated &&
              <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} onLogout={(e) => this.signout(e)}/>}/>}
            { !this.state.isAuthenticated &&
              <Redirect from="/" to="/login" />}
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
