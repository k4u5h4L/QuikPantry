import React from "react";
import { GetServerSideProps } from "next";

import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import dbConnect from "@/utils/dbConnect";
import Details from "@/components/Product/Details/Details";

export const getServerSideProps: GetServerSideProps = async (context) => {
    await dbConnect();

    const { id } = context.params;

    return {
        props: {}, // will be passed to the page component as props
    };
};

export default function Product() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner title="Product Details" path="product" />
            <Details />
        </>
    );
}
