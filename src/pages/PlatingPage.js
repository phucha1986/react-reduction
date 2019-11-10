import React from 'react';
import Page from 'components/Page';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

import { getThemeColors } from 'utils/colors';
import Moveable from 'react-moveable';
const colors = getThemeColors();

const target = [].slice.call(document.querySelectorAll(".target"));

const poses = [
  [0, 0],
  [0, 0],
  [0, 0],
];
function onChange(e)
{
  alert(e.value);
};
const PlatingPage = () => {
  return (
    <React.Fragment>
      <Page title="Create Item" breadcrumbs={[{ name: 'create-item', active: true }]}>
      <Row>
        <Col md={12} sm={12} xs={12} className="mb-3">
        <Card>
            <CardHeader>Fill the data below</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="lblName" sm={2}>
                    Name
                  </Label>
                  <Col sm={10}>
                    <Input id="lblName"
                      type="text"                      
                      placeholder="with a placeholder"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Descriptions
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>
                    Category
                  </Label>
                  <Col sm={10}>
                    <UncontrolledButtonDropdown >
                      <DropdownToggle
                        caret
                        color={colors[0]}
                        className="text-capitalize m-1">
                          {colors[0]}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </FormGroup>                                
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    File
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <Label for="checkbox2" sm={2}>
                    Radio
                  </Label>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" /> Option one is this
                        and that—be sure to include why it's great
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" /> Option two can be
                        something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio2" disabled /> Option
                        three is disabled
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="checkbox2" sm={2}>
                    Checkbox
                  </Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Check me out
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>   
    </Page>
      

      <div id="target">testing</div>
      <Moveable
        target={document.querySelector("#target")}
        container={null}
        draggable={true}        
    />
    </React.Fragment>
  );
};

export default PlatingPage;
