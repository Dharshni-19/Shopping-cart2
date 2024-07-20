/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">Add to Shopping cart</NavLink>
      <NavLink to="/cart">cart</NavLink>
    </div>
  );
};

export default Navbar;
