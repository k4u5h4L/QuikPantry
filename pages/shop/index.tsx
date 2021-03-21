import React from "react";

import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import Products from "@/components/Shop/Products/Products/Products";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
import QuickView from "@/components/Home/QuickView/QuickView";

export default function ShopIndex() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner title="Shop List" path="shop" />
            <Products />
            <Footer />
            <GoToTop />
            <QuickView />
        </>
    );
}
