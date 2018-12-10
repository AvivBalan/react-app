import React, { Component } from 'react';

import {  Button,
          Col,
          Container,
          Row,
          CardBody,
          Form,
          Card,
          CardFooter,
          Input,
          FormGroup
        } from 'reactstrap';

const processCsvTable = (table_name, text) => {
  var table = {name: table_name, columnsDefinitions:[], rowsData:[]}
  const arrayOfLines = text.match(/[^\r\n]+/g);
  var headLine = arrayOfLines.shift();
  headLine = headLine.split(',');
  for (let index = 0; index < headLine.length; index++) {
    const title = headLine[index];
    const prop = "prop" + index;
    table.columnsDefinitions.push({prop_name:prop, prop_title:title});
  }
  arrayOfLines.forEach(row => {
    var row_array = row.split(',');
    var row_obj = {};
    for (let index = 0; index < row_array.length; index++) {
      const value = row_array[index];
      const prop = "prop" + index;
      row_obj[prop] = value;
    }
    table.rowsData.push(row_obj);
  });
  return table;
};

class UploadTable extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      file: null,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  fileSelectHandler(e) {
    var file = e.target.files[0];
    if(file === undefined) file = null;
    this.setState({file});
  }
  
  fileUploadHandler() {
    if(!this.state.file) {
      alert("Enter a file");
    }
    else {
      var content;
      let fileReader = new FileReader();
      fileReader.onloadend = (e) => {
        content = fileReader.result;
        const table_name = this.state.file.name.split(".")[0];
        const table = processCsvTable(table_name, content);
        this.props.addTable(table);
      }
      fileReader.readAsText(this.state.file);
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
      <Container>
        <Row>
          <Col>
          <Card>
            <CardBody>
              <Form>
                <h3>Upload a custom table</h3>
                <p className="text-muted">Choose a csv file</p>
                <FormGroup row>
                  <Col>
                    <Input type="file" id="file-input" name="file-input" accept=".csv" onChange={this.fileSelectHandler.bind(this)}/>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick= {this.fileUploadHandler.bind(this)}><i className="fa fa-dot-circle-o" ></i> Upload</Button>
            </CardFooter>
          </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default UploadTable;
