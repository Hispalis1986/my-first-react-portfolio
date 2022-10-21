import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXing } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <button className="none">
          <a
            href="https://www.linkedin.com/in/juan-carlos-royano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </button>
      </div>
      <div>
        <button className="none">
          <a
            href="https://www.xing.com/profile/JuanCarlos_RoyanoGonzalez2/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXing />
          </a>
        </button>
      </div>
      <div>
        <button className="none">
          <a
            href="https://github.com/Hispalis1986"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
