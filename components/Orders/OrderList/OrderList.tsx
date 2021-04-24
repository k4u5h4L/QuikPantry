import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { PdtsBought } from "@/types/index";

export default function OrderList() {
    const [session] = useSession();
    const router = useRouter();

    if (!session) {
        router.push("/login");
    }

    const OrdersQuery = gql`
        query {
            OrderByEmail(email: "${session ? session.user.email : null}") {
                productsBought {
                    imageUrl
                    id
                    productName
                }
            }
        }
    `;

    const { data, error, loading } = useQuery(OrdersQuery);

    if (loading) {
        return (
            <section className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <h2>No orders yet...</h2>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    {/* ###################################################### */}
                    {data.OrderByEmail.productsBought.map(
                        (order: PdtsBought | any, index: number) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-blog-item">
                                    <div className="image">
                                        <Link href={`/product/${order.id}`}>
                                            <a>
                                                <Image
                                                    src={order.imageUrl}
                                                    alt="image"
                                                    width={387}
                                                    height={297}
                                                />
                                            </a>
                                        </Link>

                                        {/* <div className="date">
                                    <span>20 December 2020</span>
                                </div> */}
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link href={`/product/${order.id}`}>
                                                <a>{order.productName}</a>
                                            </Link>
                                        </h3>
                                        <Link href={`/product/${order.id}`}>
                                            <a className="blog-btn">
                                                Visit product page
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    {/* ###################################################### */}
                </div>
            </div>
        </section>
    );
}
