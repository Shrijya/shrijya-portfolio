import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/footer.css";
const Footer = () => (<footer className="footer"><div><strong>SP.</strong><span> AI / ML • LLM Evaluation • Python</span></div><div className="footer-links"><Link to="/projects">Projects</Link><Link to="/experience">Experience</Link><Link to="/credentials">Credentials</Link><Link to="/contact">Contact</Link></div><div className="footer-credits-text">© {new Date().getFullYear()} {INFO.main.name}. Built with React.</div></footer>);
export default Footer;
