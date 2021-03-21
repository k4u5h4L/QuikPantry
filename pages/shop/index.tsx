import React from "react";
import { GetStaticProps } from "next";

import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import Products from "@/components/Shop/Products/Products/Products";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
import QuickView from "@/components/Home/QuickView/QuickView";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

export const getStaticProps: GetStaticProps = async (context) => {
    await dbConnect();

    const pdts = await Product.find({});

    // console.log(pdts);

    return {
        props: {
            pdts: JSON.stringify(pdts),
        },
        revalidate: 10,
    };
};

export default function ShopIndex({ pdts }) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner title="Shop List" path="shop" />
            <Products products={JSON.parse(pdts)} />
            <Footer />
            <GoToTop />
            <QuickView />
        </>
    );
}
