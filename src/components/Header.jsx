import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
 import { FaFacebookF, FaGithub,   FaLinkedinIn  } from "react-icons/fa";
import { MdDownload, MdEmail, MdHorizontalRule } from "react-icons/md";

 import TextTransition, { presets } from "react-text-transition";
import { Link, NavLink, useLocation } from 'react-router-dom';
import Contact from './Contact';

const TEXTS = [
  "Frontend Developer",
  "Responsive Web Design",
  "MERN Stack Enthusiast",
  "Web Developer",
];
const Header = ( ) => {
  const location = useLocation()
 console.log(location);
  const [index, setIndex] =  useState(0);

//modal toggle
const openModal = () => {
  // document.getElementById("toggleModal").classList.add("hidden");
  document.getElementById("modal").classList.remove("hidden");
};
const closeModal = () => {
  // document.getElementById("toggleModal").classList.remove("hidden");
  document.getElementById("modal").classList.add("hidden");
};

 useEffect(() => {
   const intervalId = setInterval(
     () => setIndex((index) => index + 1),
     2000 // every 3 seconds
   );
   return () => clearTimeout(intervalId);
 }, []);

    return (
      // <div className="mx-auto max-w-screen-lg space-y-8 xl:fixed xl:top-20 xl:left-48  ">
      <div className="lg:w-full mx-auto max-w-screen-lg space-y-8 lg:sticky lg:top-20">
        <div>
          <h6 className=" text-lightish text-xl font-semibold">Hi, I am</h6>
          <h1 className="font-black leading-tight tracking-wider text-6xl text-off ">
            Nadia Sultana
          </h1>
        </div>
        <div className="my-3 text-lg font-medium tracking-tight  sm:text-xl text-off">
          <h2>
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h2>
        </div>
        <h4 className="max-w-lg text-lightish ">
          I am a frontend developer skilled in MERN Stack, handling both
          frontend and backend for responsive websites and user-friendly
          interfaces.
        </h4>
        <div>
          <ul className="text-lightish font-semibold leading-tight list-none   ">
            <a
              href="#about"
              className={`flex items-center hover:text-2xl ${
                location.hash == "#about" ? "text-xl text-off" : ""
              }`}
            >
              <span className=" ">
                <MdHorizontalRule size={"2em"} />
              </span>
              <li>About</li>
            </a>
            <a
              href="#skills"
              className={`flex items-center hover:text-2xl ${
                location.hash == "#skills" ? "text-xl text-off" : ""
              }`}
            >
              <span className=" ">
                <MdHorizontalRule size={"2em"} />
              </span>
              <li>Skills</li>
            </a>
            <a
              href="#projects"
              className={`flex items-center hover:text-2xl ${
                location.hash == "#projects" ? "text-xl text-off" : ""
              }`}
            >
              <span className=" ">
                <MdHorizontalRule size={"2em"} />
              </span>
              <li>Projects</li>
            </a>
          </ul>
        </div>
        <div className="inline-flex">
          <a
            href="./resume.pdf"
            target="_blank"
            className="bg-lightish hover:bg-off border-  text-gray-800 font-bold py-2 px-4 rounded-l inline-flex items-center"
            download={true}
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            id="toggleModal"
            className="hover:bg-off bg-lightish border-l-2 text-gray-800 font-bold py-2 px-4 rounded-r inline-flex gap-2 items-center"
          >
            <MdEmail size={"1.3em"} /> Lets Talk
          </a>
        </div>
        {/* modal */}

        <div className="flex max-w-sm items-center gap-5 my-4">
          <Link target="_blank" to={"https://github.com/nadiaS11"}>
            <FaGithub color="#E3CC8C" size={"2rem"} />
          </Link>
          <Link target="_blank" to={"https://www.facebook.com/nadia.ns11/"}>
            <FaFacebookF color="#E3CC8C" size={"2rem"} />
          </Link>
          <Link target="_blank" to={"https://www.linkedin.com/in/nadia-ns11/"}>
            <FaLinkedinIn color="#E3CC8C" size={"2rem"} />
          </Link>

          {/* modal */}
        </div>
      </div>
    );
};

Header.propTypes = {
    
};

export default Header;