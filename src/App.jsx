import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/home/Home";
import AddBlog from "./components/pages/blogs/AddBlog";
import EditBlog from "./components/pages/blogs/EditBlog";
import Blog from "./components/pages/blogs/Blog";
import NotFound from "./components/pages/notfound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ToastContainer autoClose={2000}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addblog" element={<AddBlog/>} />
        <Route path="/editblog/:id" element={<EditBlog/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
