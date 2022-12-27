import React,{useState, useEffect} from 'react'
import { Container, Row ,Col} from 'reactstrap';
import { PeopleAbout } from './aboutdata/People';


const About = () => {
  const [about , setAbout] = useState([]);

  useEffect(()=>{
    setAbout(PeopleAbout);
  },[])

  return (
   <Container>
    <Row style={{marginTop:'4rem',rowGap:'2rem'}}>
    {about.map((item,idx)=>{
      return(
        <Col lg='12' key={idx}>
          <h3>{item.name}</h3>
          <h4>{item.title}</h4>
          <h6>{item.discription}</h6>
        </Col>
      )
    })}
    </Row>
   </Container>
   
  )
}

export default About;
