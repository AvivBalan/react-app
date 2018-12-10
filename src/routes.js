import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const StaticExample = React.lazy(() => import('./views/StaticTable'));
const Profile = React.lazy(() => import('./views/Profile'));
const UploadTable = React.lazy(() => import('./views/UploadTable'));
const DynamicTable = React.lazy(() => import('./views/DynamicTable'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const static_routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/staticexample', exact: true, name: 'Static Example', component: StaticExample },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/uploadtable', exact: true, name: 'Upload a Table', component: UploadTable },
];

// const user_tables2 = [{name:'Dynamic Example 1'}, {name:'Dynamic Example 2'},];

function gen_routes(user_tables) {
  var all_routes = static_routes;
  var dynamic_routes = [];
  user_tables.forEach(table => {
    dynamic_routes.push({
      path: '/' + table.name.toLowerCase().replace(/\s/g,''),
      exact: true,
      name: table.name,
      table: table,
      component: DynamicTable
    });
  });
  all_routes = all_routes.concat(dynamic_routes);
  return all_routes;
};

export default gen_routes;
