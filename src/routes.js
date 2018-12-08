import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const BlankPage = React.lazy(() => import('./views/BlankPage'));
var Profile = React.lazy(() => import('./views/Profile'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/page1', exact: true, name: 'Page1', component: BlankPage },
  { path: '/page2', exact: true, name: 'Page2', component: BlankPage },
  { path: '/page3', exact: true, name: 'Page3', component: BlankPage },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;
