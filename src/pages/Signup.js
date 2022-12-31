import React, { useEffect, useState } from "react";

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

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

// error data 
  // const [error, setError] = useState({
  //   errors: {},
  //   isError: false,
  // });

  useEffect(() => {}, [data]);

  const HandlerChange = (event, value) => {
    setData({ ...data, [value]: event.target.value });
    // console.log(data)
  };


// reset form data 

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

// All submit form 
  const HandlerSubmitForm = (event)=>{
    event.preventDefault();
  }





  return (
    <Container >
      <Row style={{marginTop:'5rem',marginBottom:'5rem'}}>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardHeader>
              <h3>Register Here.</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={HandlerSubmitForm}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Enter Name..."
                    onChange={(e) => HandlerChange(e, "name")}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter Email..."
                    type="email"
                    value={data.email}
                    onChange={(e) => HandlerChange(e, "email")}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter password..."
                    type="password"
                    value={data.password}
                    onChange={(e) => HandlerChange(e, "password")}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="about">About Yourself</Label>
                  <Input
                    id="about"
                    name="about"
                    placeholder="Type Here Text..."
                    type="textarea"
                    value={data.message}
                    onChange={(e) => HandlerChange(e, "about")}
                  />
                </FormGroup>
                <Button outline color="light" type="register">
                  SignUp
                </Button>
                <Button
                  outline
                  color="light"
                  type="reset"
                  className="ms-4"
                  onClick={resetData}
                >
                  Reset
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
