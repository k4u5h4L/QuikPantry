import React, { useState, useEffect } from "react";

import { GetServerSideProps } from "next";

// import Navbar from "@/components/Home/Navbar/Navbar";
import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });
// import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import Products from "@/components/Shop/Products/SearchProducts/SearchProducts";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
import { ProductType } from "@/types/index";
// import QuickView from "@/components/Home/QuickView/QuickView";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

export const getServerSideProps: GetServerSideProps = async (context) => {
    await dbConnect();

    const { q } = context.query;

    const pdts: ProductType[] = await Product.find({
        name: new RegExp(`${q}`, "i"),
        tags: new RegExp(`${q}`, "i"),
    });

    // console.log(pdts);

    return {
        props: {
            pdts: JSON.stringify(pdts),
        },
    };
};

export default function Search({ pdts }) {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Banner title="Search products" path="search" />
            <Products products={JSON.parse(pdts)} />
            <Footer />
            <GoToTop />
            {/* <QuickView /> */}
        </>
    );
}
