import React from "react";
import { GetServerSideProps } from "next";

import dbConnect from "@/utils/dbConnect";
import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Home/Banner/Banner";
import Featured from "@/components/Home/Featured/Featured";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import Footer from "@/components/Home/Footer/Footer";
import QuickView from "@/components/Home/QuickView/QuickView";
import GoToTop from "@/components/GoToTop";

export const getServerSideProps: GetServerSideProps = async (context) => {
    await dbConnect();

    return {
        props: {}, // will be passed to the page component as props
    };
};

const Index = ({}) => (
    <>
        <Navbar />
        <Sidebar />
        <Banner />
        <Featured />
        <WhyUs />
        <Footer />
        <GoToTop />
        <QuickView />
    </>
);

export default Index;
