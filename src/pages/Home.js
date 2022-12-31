import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blogs from "../components/Blogs";
import { Col, Container, Row } from "reactstrap";

const Home = () => {
  const [data, setData] = useState([]);

  const loadBlogsData = async () => {
    const response = await axios.get("http://localhost:5000/blogs");
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something went wrong");
    }
  };
  console.log("data", data);

  useEffect(() => {
    loadBlogsData();
  }, []);

  // deleting blogdata handler-----------
  const HandlerDelete = async(id) => {
    if(window.confirm('Are you sure Deleted Blog ?')){
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
    if (response.status === 200) {
      toast.success('Blog Deleted successfully !')
      loadBlogsData();
    } else {
      toast.error("Something went wrong");
    }
    }
  };
  // excerpt ---------
  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(1, 50) + "...";
    }
    return str;
  };

  return (
    <React.Fragment>
      <Container >
        <Row>
          {data.length === 0 && <h2 className="text-center">No Blog Found</h2>}
        </Row>
      </Container>
      <Container>
        <Row style={{marginBottom:'3rem'}}>
          {data &&
            data.map((item, ind) => (
              <Col lg='4' md='4' sm='12' xs='12' key={ind}>
              <Blogs
                {...item}
                excerpt={excerpt}
                HandlerDelete={HandlerDelete}
              />
              </Col>
            ))}
            
        </Row>
      </Container>
    </React.Fragment> 
  );
};

export default Home;
