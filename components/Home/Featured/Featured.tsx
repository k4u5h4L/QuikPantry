import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/index";

export default function Featured({ products }) {
    return (
        <section className="top-products-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Trending Products</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua quis ipsum suspendisse
                    </p>
                </div>

                <div className="row">
                    {products.map((prod: ProductType, index: number) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="top-products-item">
                                <div className="products-image">
                                    <Link href={`/product/${prod._id}`}>
                                        <a>
                                            <Image
                                                src={prod.imageUrl}
                                                alt="image"
                                                width={650}
                                                height={650}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
