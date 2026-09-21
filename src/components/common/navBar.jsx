import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = ({ active }) => {
  const items = [
    ["home", "/", "Home"],
    ["projects", "/projects", "Projects"],
    ["experience", "/experience", "Experience"],
    ["credentials", "/credentials", "Credentials"],
    ["about", "/about", "About"],
    ["contact", "/contact", "Contact"],
  ];
  return <div className="nav-container"><nav className="navbar"><Link className="nav-brand" to="/">SP<span>.</span></Link><div className="nav-background"><ul className="nav-list">{items.map(([key,path,label]) => <li key={key} className={active === key ? "nav-item active" : "nav-item"}><Link to={path}>{label}</Link></li>)}</ul></div></nav></div>;
};
export default NavBar;
