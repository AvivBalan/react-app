import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Sidebar extends Component {
  
  render() {
    return (
      <div className="App-Sidebar">
      <ul>
        <li>
        <Link to="/">Profile</Link>
        </li>
        <li>
        <Link to="/page1/">Page1</Link>
        </li>
        <li>
        <Link to="/page2/">Page2</Link>
        </li>
        <li>
        <Link to="/page3/">Page3</Link>
        </li> 
      </ul>
      </div>
    );
  }
}

export default Sidebar;
