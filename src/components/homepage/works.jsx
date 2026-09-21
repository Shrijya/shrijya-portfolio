import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faEnvelope}
        title="Contact Me"
        body={
          <div className="works-body">
            <p>
              I’m always open to questions, feedback, and collaboration.
              Reach out to me via email or connect on professional platforms.
            </p>
            <ul className="contact-list">
              <li>
                Email: <a href="mailto:shrijyapatil158@gmail.com">shrijyapatil158@gmail.com</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/Shrijya" target="_blank" rel="noreferrer">github.com/Shrijya</a>
              </li>
              <li>
                LinkedIn: <a href="https://www.linkedin.com/in/shrijyapatil/" target="_blank" rel="noreferrer">linkedin.com/in/shrijyapatil</a>
              </li>
              <li>
                Instagram: <a href="https://instagram.com/" target="_blank" rel="noreferrer">instagram.com</a>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Works;
