import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Badges from "../../config/Badges";

import {
  Container,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container style={{ marginTop: "5rem", border: "1px solid #d1ebe8" }}>
      <Link to="/">
        <strong style={{ float: "left", color: "black", marginTop: "1rem" }}>
          <ArrowBackIcon />
          &nbsp;Go Back
        </strong>
      </Link>
      <h4
        className="text-muted"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        {blog && blog.title}
      </h4>
      <div className="py-3">
        <Card>
          <CardImg
            alt={blog && blog.title}
            src={blog && blog.imageUrl}
            style={{
              maxHeight: "400px",
            }}
            width="100%"
          />
          <CardBody>
            <div style={{background:'#f6f6f6',height:'43px'}}>
              <CardTitle style={{ float: "left",marginTop:'.5rem' }}>
                <CalendarMonthIcon />
                {blog && blog.date}
              </CardTitle>
              <CardTitle>
                <strong style={{ float: "right",marginTop:'.5rem' }}>
                  <Badges>{blog && blog.category}</Badges>
                </strong>
              </CardTitle>
            </div>
            <CardText style={{ marginTop: "1rem" }}>
              {blog && blog.description}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default Blog;
