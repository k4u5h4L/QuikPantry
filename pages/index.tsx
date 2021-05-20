import React from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import dbConnect from "@/utils/dbConnect";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });

// import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
const AddToHomeScreen: any = dynamic(
    () => import("@ideasio/add-to-homescreen-react"),
    {
        ssr: false,
    }
);

// import Navbar from "@/components/Home/Navbar/Navbar";
// import Sidebar from "@/components/Home/Sidebar/Sidebar";
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
        revalidate: 1,
    };
};

const Index = ({ products }) => {
    const handleAddToHomescreenClick = () => {
        alert(`
          1. Open Share menu
          2. Tap on "Add to Home Screen" button`);
    };
    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Banner />
            <Featured products={JSON.parse(products).slice(0, 8)} />
            <WhyUs />
            <Footer />
            <GoToTop />
            {/* <QuickView /> */}
            <AddToHomeScreen
                appId="Add QuikPantry to your homescreen"
                startDelay={1}
                displayPace={0}
                lifespan={120}
                customPromptContent={{
                    title: "Install QuikPantry as a PWA",
                    src: "/icon.png",
                }}
                customPromptPlatformDependencies={{
                    chromium: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    chrome: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    edge: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    iphone: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    ipad: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    firefox: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    samsung: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                    opera: {
                        images: [
                            {
                                src: "/icon.png",
                                alt: "Add QuikPantry to your homescreen",
                            },
                        ],
                    },
                }}
            />
        </>
    );
};

export default Index;
