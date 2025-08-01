import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../sharedpage/NavBar';
import Footer from '../sharedpage/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
        
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;