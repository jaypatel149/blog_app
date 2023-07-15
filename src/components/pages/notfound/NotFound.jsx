import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/006/374/small/modern-flat-design-illustration-of-404-error-page-free-vector.jpg"
          alt="Not Found"
          width="50%"
          height="50%"
        />
      </div>
      <div className="text-center">
        <Link to="/">Go to back</Link>
      </div>
    </>
  );
};

export default NotFound;
