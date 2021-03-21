import React from "react";
import { GetServerSideProps } from "next";

import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import dbConnect from "@/utils/dbConnect";
import Details from "@/components/Product/Details/Details";
import Product from "@/models/Product";
import { ProductType } from "@/types/index";
import { sendRegex } from "@/helpers/getRegex";

export const getServerSideProps: GetServerSideProps = async (context) => {
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
    };
};

export default function ProductPage({ product, relatedPdts }) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner title="Product Details" path="product" />
            <Details
                product={JSON.parse(product)}
                relatedProducts={JSON.parse(relatedPdts).slice(0, 5)}
            />
        </>
    );
}
