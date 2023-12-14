import React from 'react';
import PropTypes from 'prop-types';
import "./css/background.css";

const Footer = props => {
    return (
      <footer className="  w-full   my-footer border-t border-gray-200 shadow md:flex md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
          © 2023 <a className="hover:underline">Nadia Sultana</a>. All Rights
          Reserved.
        </span>
        <figure>
          <img
            className=" w-20 h-auto object-cover rounded"
            src="./my-logo.png"
            alt=""
          />
        </figure>
      </footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;