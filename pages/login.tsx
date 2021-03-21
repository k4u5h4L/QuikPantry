import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import Banner from "@/components/Login/Banner/Banner";
import LoginForm from "@/components/Login/LoginForm/LoginForm";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";

export default function login() {
    return (
        <>
            <Navbar />
            <Banner />
            <LoginForm />
            <Footer />
            <GoToTop />
        </>
    );
}
