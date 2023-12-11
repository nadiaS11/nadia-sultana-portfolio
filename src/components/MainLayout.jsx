import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
    return (
      <div className="bg-olive min-h-screen mx-auto lg:flex lg:justify-center px-6 py-12 font-sans md:px-12 md:py-20   lg:px-24  ">
        <Header />
        <div className="mx-auto   ">
          <Outlet />
        </div>
      </div>
    );
};

export default MainLayout;