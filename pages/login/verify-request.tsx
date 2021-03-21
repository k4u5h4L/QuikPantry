import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import Banner from "@/components/Login/Banner/Banner";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
import PostLogin from "@/components/Login/PostLogin/PostLogin";

export default function Verify() {
    return (
        <>
            <Navbar />
            <Banner />
            <PostLogin />
            <Footer />
            <GoToTop />
        </>
    );
}
