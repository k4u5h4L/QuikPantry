import React from "react";
// import Navbar from "@/components/Home/Navbar/Navbar";
import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });
import Banner from "@/components/Login/Banner/Banner";
import LoginForm from "@/components/Login/LoginForm/LoginForm";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";

export default function login() {
    return (
        <>
            {/* <Navbar /> */}
            <Banner />
            <LoginForm />
            <Footer />
            <GoToTop />
        </>
    );
}
