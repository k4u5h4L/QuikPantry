import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

// import Navbar from "@/components/Home/Navbar/Navbar";
import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });
// import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import Products from "@/components/Shop/Products/Products/Products";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
// import QuickView from "@/components/Home/QuickView/QuickView";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

export const getStaticPaths: GetStaticPaths = async () => {
    await dbConnect();

    const totalPages: number = await Product.countDocuments({});

    let pages: any[] = [];
    let i: number;

    for (i = 1; i <= totalPages; i++) {
        pages.push({ params: { page: `${i}` } });
    }
    pages.push({ params: { page: `${i}` } });

    return {
        paths: pages,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    await dbConnect();

    const page: any = context.params.page;

    let pdts = await Product.find({});

    const limit: number = parseInt(page) * 8;

    pdts = pdts.slice(limit - 8, limit);

    // console.log(pdts);

    const pages: number = await Product.countDocuments({});

    const totalPages = parseInt((pages / 8).toFixed(0));
    return {
        props: {
            pdts: JSON.stringify(pdts),
            page: page,
            totalPages: totalPages,
        },
        revalidate: 10,
    };
};

export default function ShopIndex({ pdts, page, totalPages }) {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Banner title="Shop List" path="shop" />
            <Products
                products={JSON.parse(pdts)}
                page={parseInt(page)}
                totalPages={parseInt(totalPages)}
            />
            <Footer />
            <GoToTop />
            {/* <QuickView /> */}
        </>
    );
}
