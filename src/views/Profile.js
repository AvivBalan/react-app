import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
      <Container>
        <Row>
          <Col sm="6" md="10">
            <h3>First name : {this.props.user.first_name}</h3>
            <h3>Last name : {this.props.user.last_name}</h3>
            <h3>Age : {this.props.user.age}</h3>
            <h3>Education : {this.props.user.education}</h3>
          </Col>
          <Col sm="6" md="2">
            <img src={this.props.user.image_url} className="img-avatar" alt="PlaceHolder" />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Profile;
