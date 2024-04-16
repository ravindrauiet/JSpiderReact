import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-gray-800 text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Ravindra Nath Jha</p>
          <p className="text-sm">Full Stack Developer</p>
          <p className="text-sm">Mobile: 9354156323</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/ravindrauiet" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/ravindra-jha75/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
