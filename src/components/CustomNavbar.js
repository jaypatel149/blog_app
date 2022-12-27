import "../All.css";
import React, { useState,useContext } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { ColorModeContext } from "./switchmode/SwitchMode";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';



import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,

} from "reactstrap";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {mode , toggleMode} = useContext(ColorModeContext);
  // console.log('mode ', mode);

  return (
    <div className="container-flued">
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand tag={ReactLink} to="/">
          MyBlogs
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about" style={{ color: "#FFFFFF" }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={ReactLink}
                to="/service"
                style={{ color: "#FFFFFF" }}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={ReactLink}
                to="/contact"
                style={{ color: "#FFFFFF" }}
              >
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <IconButton onClick={toggleMode} >
                {mode === 'light' ?<Brightness4Icon/>:<Brightness7Icon/>}
              </IconButton>
            </NavItem>
          </Nav>
          <Button outline tag={ReactLink} to="/login" style={{marginRight:'1rem',color:'#fff',border:'none'}}>
            Login
          </Button>
          <Button outline tag={ReactLink} to="signup" style={{color:'#fff',marginRight:'1rem',border:'none'}}>
            SignUp
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
