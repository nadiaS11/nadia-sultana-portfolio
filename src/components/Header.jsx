import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
 import { FaFacebookF, FaGithub,   FaLinkedinIn  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

 import TextTransition, { presets } from "react-text-transition";
import { Link } from 'react-router-dom';

const TEXTS = [
  "Frontend Developer",
  "Responsive Web Design",
  "MERN Stack Enthusiast",
  "Web Developer",
];
const Header = ( ) => {
     
  const [index, setIndex] =  useState(0);

 useEffect(() => {
   const intervalId = setInterval(
     () => setIndex((index) => index + 1),
     2000 // every 3 seconds
   );
   return () => clearTimeout(intervalId);
 }, []);

    return (
      <div className="mx-auto max-w-screen-lg space-y-8">
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
          I'm a frontend developer skilled in MERN Stack, handling both frontend
          and backend for responsive websites and user-friendly interfaces.
        </h4>
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
          <Link>
            <MdEmail color="#E3CC8C" size={"2rem"} />
          </Link>
        </div>
      </div>
    );
};

Header.propTypes = {
    
};

export default Header;