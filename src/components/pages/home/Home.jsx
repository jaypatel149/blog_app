import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BlogCard from "../blogs/BlogCard";


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
    <>
      <div className="container my-4">
        <div className="row">
          {data.length === 0 && <h1 className="text-center fw-bold">No Blog Found</h1>}
        </div>
      </div>
      <div className="container-fluid px-5 mb-5">
        <div className="row" style={{rowGap:"30px"}}>
          {data &&
            data.map((item) => (
              <div className="col-lg-3 col-sm-12 col-md-4"  key={item.id}>
                <BlogCard 
                {...item}
                excerpt={excerpt}
                HandlerDelete={HandlerDelete}
                />
              </div>
            ))}
            
        </div>
      </div>
    </> 
  );
};

export default Home;