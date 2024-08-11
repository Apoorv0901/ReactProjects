import React from "react";
import Header from "./components/Headers/Header.jsx";
import Footer from "./components/Footers/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout