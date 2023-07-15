import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Badges from "../../../config/Badges";

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
    <div className="container py-5">
      <div className="card text-dark">
        <div className="card-header pt-4">
          <Link to="/">
            <strong style={{ float: "left", color: "black" }}>
              <ArrowBackIcon />
              &nbsp;Go Back
            </strong>
          </Link>
          <h3 className="text-muted text-center">{blog && blog.title}</h3>
        </div>
        <img
          src={blog && blog.imageUrl}
          alt={blog && blog.title}
          width="100%"
          height="500px"
        />
        <div className="card-body">
          <div style={{ background: "#f6f6f6", height: "43px",padding:"10px"}}>
            <p
              className="card-title"
              style={{ float: "left" }}
            >
              <CalendarMonthIcon />
              {blog && blog.date}
            </p>
            <strong style={{ float: "right"}}>
              <Badges>{blog && blog.category}</Badges>
            </strong>
          </div>
          <p className="card-text pt-4">{blog && blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
