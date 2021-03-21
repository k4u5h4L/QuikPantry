import React from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import dbConnect from "@/utils/dbConnect";
const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
    ssr: false,
});
// import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Home/Banner/Banner";
import Featured from "@/components/Home/Featured/Featured";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import Footer from "@/components/Home/Footer/Footer";
// import QuickView from "@/components/Home/QuickView/QuickView";
import GoToTop from "@/components/GoToTop";
import Product from "@/models/Product";
import { ProductType } from "@/types/index";

export const getStaticProps: GetStaticProps = async (context) => {
    await dbConnect();

    // const p = await new Product({
    //     name: "Seasoned Tomatoes",
    //     desc:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    //     oldPrice: 652.0,
    //     price: 540.0,
    //     rating: 4,
    //     imageUrl:
    //         "https://templates.envytheme.com/orgo/default/assets/img/top-products/top-products-7.jpg",
    //     stock: true,
    //     tags: ["tomato", "fruit"],
    // });

    // p.save();

    const pdts: ProductType[] = await Product.find({});

    return {
        props: {
            products: JSON.stringify(pdts),
        }, // will be passed to the page component as props
    };
};

const Index = ({ products }) => (
    <>
        <Navbar />
        <Sidebar />
        <Banner />
        <Featured products={JSON.parse(products).slice(0, 9)} />
        <WhyUs />
        <Footer />
        <GoToTop />
        {/* <QuickView /> */}
    </>
);

export default Index;
