import React from 'react'
import "../All.css";
import { Col, Container, Row,Card, Button } from 'reactstrap';

const service = [
  {
    name:'Python',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
    knowmore:'https://www.w3resource.com/python/python-tutorial.php'
  },
  {
    name:'Javascript',
    image:'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png',
    knowmore:'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
  },
  {
    name:'HTML5',
    image:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
    knowmore:'https://www.dofactory.com/html/tags#list'
  },
  {
    name:'CSS3',
    image:'https://cdn-icons-png.flaticon.com/512/919/919826.png',
    knowmore:'https://www.dofactory.com/css/properties#:~:text=A%20CSS%20property%20assign%20a,font%2Dstyle%2C%20and%20transform.'
  },
  {
    name:'React JS',
    image:'https://ionicframework.com/docs/icons/logo-react-icon.png',
    knowmore:'https://reactjs.org/docs/react-without-es6.html'
  },
  {
    name:'Bootstrap5',
    image:'https://static.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png',
    knowmore:'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
  },
  {
    name:'Matarial UI',
    image:'https://v4.mui.com/static/logo.png',
    knowmore:'https://mui.com/material-ui/getting-started/overview/'
  }
]

const Services = () => {
  return (
    <Container>
      <Row style={{marginTop:'5rem',marginBottom:'4rem',rowGap:'3rem'}}>
      <h1 className='text-center'>Self Learning Navgurukul</h1>
      {service.map((item,idx)=>{
        return(
          <Col lg='3' md='4' sm='6' xs='12' key={idx}>
          <Card className='card_div'>
              <img src={item.image} alt='...' width='100px'></img>
              <h2 className='py-2'>{item.name}</h2>
              <a href={item.knowmore}>
              <Button outline className='slide'>Know more</Button>
              </a>
          </Card>
        </Col>
        )
      })}
        
      </Row>
    </Container>
  )
}

export default Services;
