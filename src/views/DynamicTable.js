import React, { Component } from 'react';
import { Col, Container, Row, Table, Card } from 'reactstrap';

// const table_data2 = {
//   columnsDefinitions:[
//     {prop_name:"username", prop_title:"Username"},
//     {prop_name:"reg_date", prop_title:"Date registered"},
//     {prop_name:"role", prop_title:"Role"},
//     {prop_name:"fav_color", prop_title:"Favorite color"},
//   ],
//   rowsData:[
//     {username:"Samppa Nori", reg_date:"2012/01/01", role:"Member", fav_color:"Blue",},
//     {username:"Estavan Lykos", reg_date:"2012/02/01", role:"Staff", fav_color:"Blue",},
//     {username:"Chetan Mohamed", reg_date:"2012/02/01", role:"Admin", fav_color:"No",},
//     {username:"Derick Maximinus", reg_date:"2012/03/01", role:"Member", fav_color:"Yellow",},
//     {username:"Friderik Dávid", reg_date:"2012/01/21", role:"Staff", fav_color:"Aaargh",},
//   ],
// };

class DynamicTable extends Component {
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
    var table_data = this.props.table;
    return (
      <div className="animated fadeIn">
      <Container>
        <Row>
          <Col>
          <Card>
                <Table responsive>
                  <thead>
                  <tr>
                    { // generate the table's header from the table_data
                      table_data.columnsDefinitions.map((p, k) => 
                        <th key={k}>{p.prop_title}</th>
                    )}
                  </tr>
                  </thead>
                  <tbody>
                  { // generate the table's body from the table_data
                    table_data.rowsData.map((r, i) => 
                      <tr key={i}>{
                        table_data.columnsDefinitions.map((q, j) =>
                        <td key={j}>
                          {r[q["prop_name"]]}
                        </td>
                        )}</tr>
                  )}
                  </tbody>
                </Table>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default DynamicTable;
