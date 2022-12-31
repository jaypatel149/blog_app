import "../All.css";

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const contactsArray = [
  {
    name: "JayPatel",
    phone: "9082100916",
    email: "jaiprakash@navgurukul.org",
    address: "Navgurukul Dharamsala Himachal Pradesh pinCode-176057",
    image:
      "/assests/jay.jpeg",
    isActive: true,
  },
  {
    name: "Anand Patel",
    phone: "8928181667",
    email: "anand@navgurukul.org",
    address: "Navgurukul Dharamsala Himachal Pradesh pinCode-176057",
    image:"/assests/anand.jpeg",
    isActive: false,
  },
  {
    name: "Deepak Patel",
    phone: "8948601991",
    email: "deepak@navgurukul.org",
    address: "Navgurukul Dharamsala Himachal Pradesh pinCode-176057",
    image: "/assests/deepak.jpeg",
    isActive: false,
  },
  {
    name: "Pratik Deshmukh",
    phone: "9325833720",
    email: "pratik@navgurukul.org",
    address: "Navgurukul Dharamsala Himachal Pradesh pinCode-176057",
    image:
    "/assests/pratik.jpeg",
    isActive: false,
  },
  {
    name: "Nitesh sharma",
    phone: "8962158723",
    email: "nitesh@navgurukul.org",
    address: "Navgurukul Dharamsala Himachal Pradesh pinCode-176057",
    image:
    "/assests/nitesh.jpeg",
    isActive: false,
  },
];

const Contact = () => {
  return (
    <Container>
      <Row style={{ marginTop: "5rem" ,marginBottom:'5rem',rowGap:'2rem'}}>
      <h2 className='navgurukul'> NavGurukul Members</h2>
        {contactsArray.map((items,id) => {
          return (
            <Col lg="4" xs="12" sm="6" md="4" key={id}>
              <Card color="dark" inverse>
                <CardImg className="my__image" alt="picture" src={items.image}/>
                <CardBody>
                  <CardTitle tag="h5" className='name__style'>{items.name}</CardTitle>
                  <CardSubtitle className="py-3 textstyle" tag="h6">
                    Phone:- &nbsp;{items.phone}
                  </CardSubtitle>
                  <CardSubtitle className="py-3 address" tag="h6">
                    Address:- &nbsp;{items.address}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Contact;
