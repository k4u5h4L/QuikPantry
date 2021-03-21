import React from "react";

import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import CartItems from "@/components/Cart/CartItems/CartItems";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";

export default function Cart() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner title="Cart" path="cart" />
            <CartItems />
            <Footer />
            <GoToTop />
        </>
    );
}
