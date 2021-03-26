import Link from "next/link";
import React from "react";

import { AfterOrderPlaced } from "@/constants/constants";
import { OrderInstruType } from "@/types/index";

export default function OrderPlaced() {
    return (
        <section className="faq-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Great! Your order is being processed.</h2>
                    <p>
                        While we&apos;re doing that, why don&apos;t you check
                        out some more products?
                        <br />
                        <br />
                        <Link href="/shop/1">
                            <a className="default-btn">Go to shop</a>
                        </Link>
                    </p>
                </div>

                <div className="faq-accordion">
                    <ul className="accordion">
                        {AfterOrderPlaced.map(
                            (item: OrderInstruType, index: number) => (
                                <li className="accordion-item" key={index}>
                                    <a
                                        className={`accordion-title${
                                            index == 0 ? " active" : ""
                                        }`}
                                        // href="javascript:void(0)"
                                        href="#"
                                    >
                                        {/* <i className="bx bx-plus"></i> */}
                                        {item.title}
                                    </a>

                                    <p
                                        // className={`accordion-content${
                                        //     index == 0 ? " show" : ""
                                        // }`}
                                        className="accordion-content show"
                                    >
                                        {item.desc}
                                    </p>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
