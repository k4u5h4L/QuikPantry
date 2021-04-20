import React, { useState } from "react";

import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("@/components/Home/Navbar/Navbar"), {
//     ssr: false,
// });
// import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Banner from "@/components/Shop/Banner/Banner";
// import CheckoutPage from "@/components/Checkout/CheckoutPage";
const CheckoutPage = dynamic(
    () => import("@/components/Checkout/CheckoutPage"),
    {
        ssr: false,
    }
);
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
import OrderPlaced from "@/components/OrderPlaced/OrderPlaced";

export default function Checkout() {
    const [ordered, setOrdered] = useState<boolean>(false);

    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            {!ordered ? (
                <>
                    <Banner title="Checkout" path="checkout" />
                    <CheckoutPage
                        ordered={ordered}
                        setOrdered={setOrdered}
                    />{" "}
                </>
            ) : (
                <>
                    <Banner title="Order placed" path="checkout" />
                    <OrderPlaced />
                </>
            )}
            <Footer />
            <GoToTop />
        </>
    );
}
