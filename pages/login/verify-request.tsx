import React from "react";
// import Navbar from "@/components/Home/Navbar/Navbar";
import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });
import Banner from "@/components/Login/Banner/Banner";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
import PostLogin from "@/components/Login/PostLogin/PostLogin";

export default function Verify() {
    return (
        <>
            {/* <Navbar /> */}
            <Banner />
            <PostLogin />
            <Footer />
            <GoToTop />
        </>
    );
}
