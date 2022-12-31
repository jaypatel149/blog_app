import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import NotFound from "./pages/blogs/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBlog from "./pages/blogs/AddBlog";
import Blog from "./pages/blogs/Blog";
import EditBlog from "./pages/blogs/EditBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ToastContainer />
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/editblog/:id" element={<EditBlog/>} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <hr/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
