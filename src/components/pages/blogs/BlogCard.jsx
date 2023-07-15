import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Badges from "../../../config/Badges";

const BlogCard = ({
  title,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  HandlerDelete,
}) => {
  return (
    <>
      <div className="card text-dark">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={title}
          width="100%"
          height="320px"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {excerpt(description)}
            <Link style={{ textDecoration: "none" }} to={`/blog/${id}`}>
              Read more
            </Link>
          </p>
          <Badges>{category}</Badges>
        </div>
        <div className="card-body">
          <Link to={`/editblog/${id}`} className="card-link">
            <button type="button" className="btn btn-secondary btn-sm">
              <EditIcon style={{ color: "#55acee" }} />
              Edit
            </button>
          </Link>
          <Link className="card-link">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => HandlerDelete(id)}
            >
              <DeleteIcon style={{ color: "#dd4b39" }} />
              Delete
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    excerpt: PropTypes.func.isRequired,
    HandlerDelete: PropTypes.func.isRequired,
  };

export default BlogCard;
