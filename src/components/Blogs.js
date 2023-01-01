import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Badges from "../config/Badges";
import {
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  CardImg,
} from "reactstrap";

const Blogs = ({
  title,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  HandlerDelete,
}) => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Card color="dark" inverse>
        <CardImg alt={title} src={imageUrl} width="100%" height='100%' top />
        <CardBody>
          <CardTitle
            style={{ textAlign: "center", fontWeight: "bold" }}
            tag="h5"
          >
            {title}
          </CardTitle>
          <CardText>
            {excerpt(description)}
            <Link style={{ textDecoration: "none" }} to={`/blog/${id}`}>
              Read more
            </Link>
          </CardText>
          <CardText
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Badges>{category}</Badges>
          </CardText>
          <Link to={`/editblog/${id}`}>
            <Button size="sm">
              <EditIcon style={{ color: "#55acee" }} />
              &nbsp;Edit
            </Button>
          </Link>
          <Button onClick={() => HandlerDelete(id)} className="ms-3" size="sm">
            <DeleteIcon style={{ color: "#dd4b39" }} />
            Delete
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Blogs;
