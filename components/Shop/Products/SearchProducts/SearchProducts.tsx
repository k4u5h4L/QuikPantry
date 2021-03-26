import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ProductType } from "@/types/index";

export default function SearchProducts({ products }) {
    return (
        <section className="top-products-area pt-100 pb-100">
            <div className="container">
                <div className="orgo-grid-sorting row align-items-center">
                    {products.length != 0 ? (
                        <div className="col-lg-6 col-md-6 result-count">
                            {/* <p>
                            We found <span className="count">10</span> products
                            available for you
                        </p> */}
                            <p>Totally fresh and authentic goods.</p>
                        </div>
                    ) : null}

                    {/* <div className="col-lg-6 col-md-6 ordering">
                        <div className="select-box">
                            <label>Sort By:</label>
                            <select
                                onChange={() => alert("changed")}
                                value={`Default`}
                            >
                                <option
                                    onChange={() => alert("changed")}
                                    value={`Default`}
                                >
                                    Default
                                </option>
                                <option
                                    onChange={() => alert("changed")}
                                    value={`Popularity`}
                                >
                                    Popularity
                                </option>
                                <option
                                    onChange={() => alert("changed")}
                                    value={`Latest`}
                                >
                                    Latest
                                </option>
                                <option
                                    onChange={() => alert("changed")}
                                    value={`asc`}
                                >
                                    Price: low to high
                                </option>
                                <option
                                    onChange={() => alert("changed")}
                                    value={`desc`}
                                >
                                    Price: high to low
                                </option>
                            </select>
                        </div>
                    </div> */}
                </div>

                <div className="row">
                    {products.length != 0 ? (
                        products.map((prod: ProductType, index: number) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="top-products-item">
                                    <div className="products-image">
                                        <Link href={`/product/${prod._id}`}>
                                            <a>
                                                <Image
                                                    src={prod.imageUrl}
                                                    alt="image"
                                                    width={600}
                                                    height={600}
                                                />
                                            </a>
                                        </Link>

                                        {/* <ul className="products-action">
                                        <li>
                                            <a
                                                href="cart.html"
                                                data-tooltip="tooltip"
                                                data-placement="top"
                                                title="Add to Cart"
                                            >
                                                <i className="flaticon-shopping-cart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                data-tooltip="tooltip"
                                                data-placement="top"
                                                title="Add to Wishlist"
                                            >
                                                <i className="flaticon-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                data-tooltip="tooltip"
                                                data-placement="top"
                                                title="Quick View"
                                                data-toggle="modal"
                                                data-target="#productsQuickView"
                                            >
                                                <i className="flaticon-search"></i>
                                            </a>
                                        </li>
                                    </ul> */}

                                        <div className="sale">
                                            <span>Sale</span>
                                        </div>
                                    </div>

                                    <div className="products-content">
                                        <h3>
                                            <Link href={`/product/${prod._id}`}>
                                                <a>{prod.name}</a>
                                            </Link>
                                        </h3>
                                        <div className="price">
                                            <span className="new-price">
                                                ${prod.price}
                                            </span>
                                            <span> </span>
                                            <span className="old-price">
                                                ${prod.oldPrice}
                                            </span>
                                        </div>
                                        <ul className="rating">
                                            <li>
                                                {[...Array(prod.rating)].map(
                                                    (
                                                        rating: number,
                                                        index: number
                                                    ) => (
                                                        <i
                                                            key={index}
                                                            className="bx bxs-star"
                                                        ></i>
                                                    )
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h4>No mathing products :(</h4>
                    )}
                </div>
            </div>
        </section>
    );
}
