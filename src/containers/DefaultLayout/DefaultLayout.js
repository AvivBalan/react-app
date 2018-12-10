import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppHeader,
  AppSidebar,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

  const user_data = {"first_name":"John", "last_name":"Smith", "age":"50", "education":"Primary school",
  "image_url":"http://bappeda.jabarprov.go.id/wp-content/uploads/web_assets/default-pp.png", "user_tables":[]};

class DefaultLayout extends Component {

  constructor(props){
    super(props);
    this.state = {
      is_logged:false,
      user_data: user_data,
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault();
    this.props.onLogout(e);
    this.props.history.push('/login');
  }

  addTable(table) {
    var user_data = {...this.state.user_data}
    user_data.user_tables.push(table);
    this.setState({user_data});
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={(e) => this.signOut(e)} user={user_data}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <Suspense>
            <AppSidebarNav navConfig={navigation(this.state.user_data.user_tables)} {...this.props} />
            </Suspense>
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes(this.state.user_data.user_tables).map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component
                            user={user_data}
                            table={route.table} 
                            addTable={this.addTable.bind(this)}
                            navConfig={navigation} 
                            {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/profile" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
