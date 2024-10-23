// src/components/SocialIcons.js
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="fixed top-1/3 p-4 bg-white shadow-lg rounded-lg">
      <ul className="flex flex-col space-y-4">
        <li>
          <a
            href="mailto:israelogundele306@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition"
          >
            <SiGmail size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ogundele-israel-b490701bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Israel306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/OgundeleIsrael2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition"
          >
            <FaTwitter size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
