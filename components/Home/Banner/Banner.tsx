import Link from "next/link";
import React from "react";

export default function Banner() {
    return (
        <div className="main-banner">
            <div className="main-banner-item">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <span>Taste freshness and purity</span>
                                <h1>So Organic, It&apos;s Criminal</h1>
                                <p>
                                    You wanna get fit like us? Eat fresh by
                                    buying stuff from this site as we&apos;re
                                    getting ripped too.
                                </p>
                                <div className="banner-btn">
                                    <Link href="/shop/1">
                                        <a className="default-btn">Our Shop</a>
                                    </Link>
                                    {/* <a
                                        className="optional-btn"
                                    >
                                        Go to Cart
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
