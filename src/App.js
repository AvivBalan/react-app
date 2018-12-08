import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Profile from './Profile';
import Sidebar from './Sidebar';

const data = {"first_name":"John", "last_name":"Smith", "age":"50", "education":"Primary school",
        "image_url":"https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest?cb=20171030104015"};
                
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-main">
        <Sidebar />
        <div className="App-body">
        <Route path="/" exact strict render={
          () => {
            return (<Profile data={data}/>);
          }
        }/>
        <Route path="/page1/" exact strict render={
          () => {
            return (<h1>Page 1</h1>);
          }
        }/>
        <Route path="/page2/" exact strict render={
          () => {
            return (<h1>Page 2</h1>);
          }
        }/>
        <Route path="/page3/" exact strict render={
          () => {
            return (<h1>Page 3</h1>);
          }
        }/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;