import React from "react";

import Navbar from "@/components/Home/Navbar/Navbar";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
import CheckoutPage from "@/components/Checkout/CheckoutPage";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";

export default function Checkout() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Banner title="Checkout" path="checkout" />
            <CheckoutPage />
            <Footer />
            <GoToTop />
        </>
    );
}
