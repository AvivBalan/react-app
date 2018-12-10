const static_nav = [
  {
    name: 'Static Example',
    url: '/staticexample',
    icon: 'cui-file',
  },
];

const add_table_nav = [
  {
    name: 'Upload a table',
    url: '/uploadtable',
    icon: 'icon-plus',
    class: 'mt-auto',
    variant: 'success',
  },
];

// const user_tables2 = [{name:'Dynamic Example 1'}, {name:'Dynamic Example 2'},];

function gen_navigation(user_tables) {
  var all_navs = static_nav;
  var dynamic_nav = [];
  user_tables.forEach(table => {
    dynamic_nav.push({
      name: table.name,
      url: table.name.toLowerCase().replace(/\s/g,''),
      icon: 'cui-file',
    });
  });
  all_navs = all_navs.concat(dynamic_nav).concat(add_table_nav);
  var nav2 = {
    items: all_navs
  };
  return nav2;
};

export default gen_navigation;
