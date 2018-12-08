import React, { Component } from 'react';

class Profile extends Component {
  
  render() {
    return (
      <div className="profile">
          <div className="App-profile">
            <div className="App-details">
              <h3>First name : {this.props.data.first_name}</h3>
              <h3>Last name : {this.props.data.last_name}</h3>
              <h3>Age : {this.props.data.age}</h3>
              <h3>Education : {this.props.data.education}</h3>
            </div>
            <div className="App-image">
            <img src={this.props.data.image_url} className="App-avatar" alt="logo" />
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
