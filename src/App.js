import React, { Component } from 'react';
import './App.css';

import Profile from './Profile';

const data = {"first_name":"John", "last_name":"Smith", "age":"50", "education":"Primary school", 
                "image_url":"https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest?cb=20171030104015"};
                
class App extends Component {
  render() {
    return (
      <div>
        <Profile data={data}/>
      </div>
      
    );
  }
}

export default App;
