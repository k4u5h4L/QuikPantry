import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Banner from "@/components/Shop/Banner/Banner";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/GoToTop";

export default function Personal() {
    const [pdts, setPdts] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch(`/api/recommend`);
            const data = await res.json();

            setPdts(data);
        };

        getItems();
    }, []);

    if (pdts.length == 0) {
        return (
            <>
                <Banner title="For you ❤️" path="personal" />
                <section className="blog-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <h2>No orders yet...</h2>
                        </div>
                    </div>
                </section>
                <Footer />
                <GoToTop />
            </>
        );
    }

    return (
        <>
            <Banner title="For you ❤️" path="personal" />
            <section className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {/* ###################################################### */}
                        {pdts.map((product, index: number) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-blog-item">
                                    <div className="image">
                                        <Link href={`/product/${product._id}`}>
                                            <a>
                                                <Image
                                                    src={product.imageUrl}
                                                    alt="image"
                                                    width={387}
                                                    height={297}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link
                                                href={`/product/${product._id}`}
                                            >
                                                <a>{product.name}</a>
                                            </Link>
                                        </h3>
                                        <Link href={`/product/${product._id}`}>
                                            <a className="blog-btn">
                                                Visit product page
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* ###################################################### */}
                    </div>
                </div>
            </section>
            <Footer />
            <GoToTop />
        </>
    );
}

{
    /* <section className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <h2>No orders yet...</h2>
                    </div>
                </div>
            </section> */
}
