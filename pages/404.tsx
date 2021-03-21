import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/NotFound/Banner/Banner";
import Error from "@/components/NotFound/Error/Error";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner />
            <Error />
            <Footer />
            <GoToTop />
        </>
    );
}
