import React from 'react';
import PropTypes from 'prop-types';

const Header = ( ) => {
    return (
      <div className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24  ">
        <h6 className="text-lightish text-xl font-bold">Hi, my name is</h6>
        <h1 className="font-black leading-normal tracking-wider text-6xl text-off ">
          Nadia Sultana
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Frontend Developer
        </h2>
      </div>
    );
};

Header.propTypes = {
    
};

export default Header;