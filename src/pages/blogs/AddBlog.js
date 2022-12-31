import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
} from "reactstrap";

const initilizeState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};

const AddBlog = () => {
  const navigate = useNavigate();
  const [categoryError, setCategoryError] = useState(null);
  const [formData, setFormData] = useState(initilizeState);
  const { title, description, category, imageUrl } = formData;

  // current date set -----
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  // all form data submit----
  const FormHandlerSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setCategoryError("Please select a category");
    }
    if (title && description && imageUrl && category) {
      const currentDate = getDate();
      const updatedBlogData = { ...formData, date: currentDate };
      const response = await axios.post(
        "http://localhost:5000/blogs",
        updatedBlogData
      );
      if (response.status === 201) {
        toast.success("Blog create the Successfully");
      } else {
        toast.error("Something went wrong");
      }
      setFormData({ title: "", description: "", imageUrl: "", category: "" });
      navigate("/");
    }
  };
  // input data change ------
  const onchangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //  image uploaded cloudanary api---

  const onUploadImage = (file) => {
    console.log("file", file);
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "i87tqxyk");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dcexrqoje/image/upload",
        uploadData
      )
      .then((resp) => {
        // console.log('resp',resp)
        toast.info("image uploaded successfully");
        setFormData({ ...formData, imageUrl: resp.data.url });
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };
  // category change data -----
  const onChangeCategory = (e) => {
    setCategoryError(null);
    setFormData({ ...formData, category: e.target.value });
  };

  return (
    <Container>
      <Row style={{ marginTop: "5rem" }}>
        <h1 className="text-center">Add Blogs</h1>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardBody>
              <Form noValidate onSubmit={FormHandlerSubmit}>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    value={title || ""}
                    id="title"
                    name="title"
                    placeholder="Enter Title..."
                    type="text"
                    required
                    onChange={onchangeInput}
                  />
                  <FormFeedback>Please fill the title</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="discription">Description</Label>
                  <Input
                    value={description || ""}
                    id="description"
                    name="description"
                    placeholder="Enter description..."
                    type="textarea"
                    required
                    onChange={onchangeInput}
                  />
                  <FormFeedback>Please fill the description</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="select">Please Select Category</Label>
                  <Input
                    id="select"
                    name="select"
                    type="select"
                    required
                    onChange={onChangeCategory}
                    value={category}
                  >
                    <option>Select Category</option>
                    {[
                      "Travel",
                      "Fashion",
                      "Fitness",
                      "Sports",
                      "Food",
                      "Tech",
                    ].map((option, idx) => {
                      return (
                        <option value={option || ""} key={idx}>
                          {option}
                        </option>
                      );
                    })}
                  </Input>
                  {categoryError && (
                    <p
                      style={{
                        color: "red",
                        textAlign: "left",
                        fontSize: "14px",
                      }}
                    >
                      {categoryError}
                    </p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="imageUrl">Image</Label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    required
                    onChange={(e) => onUploadImage(e.target.files[0])}
                  />
                  <FormFeedback>Please upload a imageurl</FormFeedback>
                </FormGroup>
                <Button outline color="light" type="submit">
                  Add
                </Button>
                <Button
                  outline
                  color="light"
                  className="ms-5"
                  onClick={() => navigate("/")}
                >
                  <ArrowBackIcon />
                  &nbsp;Go to back
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBlog;
