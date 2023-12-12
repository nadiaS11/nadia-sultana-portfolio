import React from "react";
import PropTypes from "prop-types";
import img1 from "../assets/images/nadtech1.png";

import { Link } from "react-router-dom";

const ProjectThree = () => {
  return (
    <Link
      to={"https://nadtech-86358.web.app"}
      target="_blank"
      className="cursor-pointer hover:shadow-lightish hover:shadow-xl backdrop-blur-md  bg-off bg-opacity-5"
    >
      <div className="md:flex px-4 leading-none max-w-4xl   backdrop-blur   border-t-2 ">
        <div className=" flex-grow ">
          <img
            src={img1}
            alt="pic"
            className="h-72  hover:object-top  rounded-md object-cover transform -translate-y-8     drop-shadow-2xl  "
          />
        </div>

        <div className="flex-col text-gray-300 max-w-xs">
          <p className="pt-4 text-2xl font-bold ">NadTech</p>
          <hr />
          <div className="text-md flex justify-between px-4 my-2">
            <span className="font-bold">
              E-commerce project | A brand based Tech shop
            </span>
            <span className="font-bold"></span>
          </div>
          <p className="block  px-4 my-4 text-sm text-left">
            A tech brand-based website to add , update , delete or order a
            product.
          </p>

          <p className="flex text-md px-4 my-2 flex-wrap leading-normal">
            React
            <span className="font-bold px-2">|</span>
            Router <span className="font-bold px-2">|</span> Daisy UI
            <span className="font-bold px-2">|</span> Express.js{" "}
            <span className="font-bold px-2">|</span>JWT
            <span className="font-bold px-2">|</span>Mongo DB{" "}
            <span className="font-bold px-2">|</span> Firebase Auth
          </p>

          <div className="text-xs flex items-center">
            <Link
              to="https://nadtech-86358.web.app"
              target="_blank"
              className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none font-semibold  hover:bg-olive focus:outline-none focus:shadow-outline"
            >
              Live
            </Link>

            <Link
              to="https://github.com/nadiaS11/brand-shop-client"
              target="_blank"
              className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none font-semibold  hover:bg-olive focus:outline-none focus:shadow-outline"
            >
              Client
            </Link>

            <Link
              to="https://github.com/nadiaS11/brand-shop-server"
              target="_blank"
              className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none font-semibold  hover:bg-olive focus:outline-none focus:shadow-outline"
            >
              Server
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProjectThree.propTypes = {};

export default ProjectThree;
