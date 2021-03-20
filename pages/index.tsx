import React from "react";
import Temp from "@/components/Temp";
import dbConnect from "@/utils/dbConnect";

export async function getServerSideProps(context) {
    await dbConnect();

    return {
        props: {}, // will be passed to the page component as props
    };
}

const Index = ({}) => (
    <>
        <h1>Groceries</h1>
        <p>
            <Temp />
        </p>
    </>
);

export default Index;
