import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";

// import Navbar from "@/components/Home/Navbar/Navbar";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });
// import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import dbConnect from "@/utils/dbConnect";
// import Details from "@/components/Product/Details/Details";
const Details = dynamic(() => import("@/components/Product/Details/Details"), {
    ssr: false,
});

import Product from "@/models/Product";
import { ProductType } from "@/types/index";
import { sendRegex } from "@/helpers/getRegex";

export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    await dbConnect();

    const res = await Product.find({});

    // Get the paths we want to pre-render based on posts
    const paths = res.map((pdt: ProductType) => ({
        params: { id: `${pdt._id}` },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    await dbConnect();

    const { id } = context.params;
    // console.log(id);

    const product: ProductType = await Product.findById(id);

    const { tags } = product;

    const relatedProducts: ProductType[] = await Product.find({
        tags: sendRegex(tags),
        name: { $ne: product.name },
    });

    return {
        props: {
            product: JSON.stringify(product),
            relatedPdts: JSON.stringify(relatedProducts),
        }, // will be passed to the page component as props
        revalidate: 1,
    };
};

export default function ProductPage({ product, relatedPdts }) {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Banner title="Product Details" path="product" />
            <Details
                product={JSON.parse(product)}
                relatedProducts={JSON.parse(relatedPdts).slice(0, 4)}
            />
        </>
    );
}
