import React from 'react';
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Login = () => {
  return (
    <Container>
    <Row style={{marginTop:'5rem',marginBottom:'5rem'}}>
      <Col sm={{ size: 6, offset: 3 }}>
        <Card color="dark" inverse>
          <CardHeader> <h3>Login Here !!</h3> </CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter Email..."
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter password..."
                  type="password"
                />
              </FormGroup>
              <Button outline color="light" type="register">Login</Button>
              <Button outline color='light' type="reset" className="ms-4">Reset</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Login;
