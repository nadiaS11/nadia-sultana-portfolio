import React from 'react';
import { Outlet } from 'react-router-dom';
import './css/background.css'
import Header from './Header';
import Footer from './Footer';
 import  { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
      <div>
        {" "}
        <Toaster />
        {/* <div className="  main-background relative min-h-screen mx-auto lg:flex lg:justify-center px-6 py-12  md:px-12 md:py-20   xl:px-10 2xl:p-24   ">
          <div> */}
        <div className="main-background relative min-h-screen mx-auto lg:flex lg:justify-between px-6 py-12 md:px-12 md:py-20 xl:px-10 2xl:p-24">
          <div className="lg:w-1/2 xl:w-2/5 mx-auto">
            <Header />
          </div>
          {/* <div className="mx-auto  lg:mr-32  "> */}{" "}
          <div className="mx-auto lg:w-1/2 xl:w-3/5 lg:ml-0">
            <Outlet />
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;