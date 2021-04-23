import React from "react";
import dynamic from "next/dynamic";

import Banner from "@/components/Shop/Banner/Banner";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";
const OrderList = dynamic(
    () => import("@/components/Orders/OrderList/OrderList"),
    {
        ssr: false,
    }
);
// import OrderList from "@/components/Orders/OrderList/OrderList";

export default function Orders() {
    return (
        <>
            <Banner title="Orderts List" path="orders" />
            <OrderList />
            <Footer />
            <GoToTop />
        </>
    );
}
