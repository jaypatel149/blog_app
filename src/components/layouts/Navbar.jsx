import { useContext } from "react";
import {NavLink} from 'react-router-dom'
import classes from "../layouts/Navbar.module.css";
import AddIcon from "@mui/icons-material/Add";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness7Icon from "@mui/icons-material/Brightness4";
import { IconButton } from "@mui/material";
import { ColorModeContext } from "../../mode/SwitchMode";

const Navbar = () => {

  const { mode, toggleMode } = useContext(ColorModeContext);
//   console.log('mode ', mode);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container-fluid">
        <NavLink className={`navbar-brand ${classes.logo}`} to="/">
          Blog
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active fw-bold" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/addblog">
              <button type="button" className="btn btn-outline-secondary btn-sm text-white fw-bold"> <AddIcon/> Blogs</button>
              </NavLink>
            </li>
          </ul>
          <div className={classes.toggle}>
            <IconButton onClick={toggleMode} style={{color:"white"}}>
              {mode === "light" ? <BrightnessHighIcon/> : <Brightness7Icon />}
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
