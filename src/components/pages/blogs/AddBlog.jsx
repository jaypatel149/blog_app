import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddBlog = () => {
  const navigate = useNavigate();
  const [categoryError, setCategoryError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
  });

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
        toast.error("Something went wrong",err);
      });
  };
  // category change data -----
  const onChangeCategory = (e) => {
    setCategoryError(null);
    setFormData({ ...formData, category: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1 className="text-center mb-4">Add Blog</h1>
          <div className="card p-4 bg-dark text-white">
            <form onSubmit={FormHandlerSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={title || ""}
                  name="title"
                  placeholder="Enter Title..."
                  onChange={onchangeInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={description || ""}
                  name="description"
                  placeholder="Enter description..."
                  type="textarea"
                  onChange={onchangeInput}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Please Select Category
                </label>
                <select
                  className="form-select"
                  onChange={onChangeCategory}
                  value={category}
                >
                  <option disabled>Select Category</option>
                  {[
                    "Travel",
                    "Fashion",
                    "Fitness",
                    "Sports",
                    "Food",
                    "Tech",
                  ].map((category, index) => (
                    <option key={index} value={category || ""}>
                      {category}
                    </option>
                  ))}
                </select>
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
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) => onUploadImage(e.target.files[0])}
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="btn btn-primary me-5 w-25 fw-bold"
                >
                  Submit
                </button>
                <button className="btn btn-outline-secondary w-25 text-white" onClick={() => navigate("/")}>
                  <ArrowBackIcon />
                  &nbsp;&nbsp; Go to back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
