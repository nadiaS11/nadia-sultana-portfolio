import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
    return (
        <div className='bg-olive min-h-screen mx-auto'>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;