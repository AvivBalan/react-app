import React, { Component } from 'react';
import { Col, Container, Row, Table, Card } from 'reactstrap';
import exampletable from '../data/exampletable';

const table_data = exampletable;

class StaticTable extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
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

export default StaticTable;
