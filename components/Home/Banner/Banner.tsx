import React from "react";

export default function Banner() {
    return (
        <div className="main-banner">
            <div className="main-banner-item">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <span>Take Natural Taste From Our Shop</span>
                                <h1>Organic Food Is Good For Health</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                    quis ipsum suspendisse
                                </p>
                                <div className="banner-btn">
                                    <a
                                        href="shop-1.html"
                                        className="default-btn"
                                    >
                                        Our Shop
                                    </a>
                                    <a
                                        href="cart.html"
                                        className="optional-btn"
                                    >
                                        Add to Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
