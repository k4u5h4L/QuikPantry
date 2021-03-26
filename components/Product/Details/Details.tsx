import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types/index";
import { CartContext } from "@/utils/CartContext";
import Reviews from "../Reviews/Reviews";

export default function Details({ product, relatedProducts }) {
    const { value, setValue } = useContext(CartContext);

    const addToCart = (): void => {
        const itemId = `${product._id}`;
        let pdts: string[] = JSON.parse(localStorage.getItem("cart")) || [];

        if (!pdts.includes(itemId)) {
            pdts.push(itemId);
        }
        localStorage.setItem("cart", JSON.stringify(pdts));
        setValue(pdts.length);
    };
    return (
        <section className="product-details-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                {/* <div className="product-details-image"> */}
                                <Image
                                    src={product.imageUrl}
                                    width={650}
                                    height={650}
                                />
                                {/* </div> */}
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="product-details-desc">
                                    <h3>{product.name}</h3>
                                    <div className="price">
                                        <span className="new-price">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <span> </span>
                                        <span className="old-price">
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="product-review">
                                        <div className="rating">
                                            {product.reviews.length != 0 ? (
                                                [
                                                    ...Array(product.rating),
                                                ].map(
                                                    (
                                                        rating: number,
                                                        index: number
                                                    ) => (
                                                        <i
                                                            key={index}
                                                            className="bx bxs-star"
                                                        ></i>
                                                    )
                                                )
                                            ) : (
                                                <p>
                                                    <b>(No reviews yet)</b>
                                                </p>
                                            )}
                                        </div>
                                        {/* <a href="#" className="rating-count">
                                            3 reviews
                                        </a> */}
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt
                                        ut labore et.
                                    </p>
                                    <div className="product-add-to-cart">
                                        {/* <div className="input-counter">
                                            <span className="minus-btn">
                                                <i className="bx bx-minus"></i>
                                            </span>
                                            <input
                                                type="text"
                                                min="1"
                                                value="1"
                                                onChange={() =>
                                                    alert("changed")
                                                }
                                            />
                                            <span className="plus-btn">
                                                <i className="bx bx-plus"></i>
                                            </span>
                                        </div> */}
                                        <button
                                            type="button"
                                            className="default-btn"
                                            onClick={() => addToCart()}
                                        >
                                            Add to cart
                                            <span></span>
                                        </button>
                                    </div>

                                    {/* <div className="buy-checkbox-btn">
                                        <div className="item">
                                            <input
                                                className="inp-cbx"
                                                id="cbx"
                                                type="checkbox"
                                            />
                                            <label
                                                className="cbx"
                                                htmlFor="cbx"
                                            >
                                                <span>
                                                    <svg
                                                        width="12px"
                                                        height="10px"
                                                        viewBox="0 0 12 10"
                                                    >
                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                    </svg>
                                                </span>
                                                <span>
                                                    I agree with the terms and
                                                    conditions
                                                </span>
                                            </label>
                                        </div>
                                        <div className="item">
                                            <a
                                                href="#"
                                                className="btn btn-light"
                                            >
                                                Buy it now!
                                            </a>
                                        </div>
                                    </div> */}

                                    {/* <div className="products-share">
                                        <ul className="social">
                                            <li>
                                                <span>Share:</span>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="facebook"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="twitter"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="linkedin"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="instagram"
                                                    target="_blank"
                                                >
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <Reviews product={product} />

                        <div className="related-shop">
                            <h4>Related Products</h4>
                            <div className="row">
                                {relatedProducts.map(
                                    (prod: ProductType, index: number) => (
                                        <div
                                            className="col-lg-6 col-md-6"
                                            key={index}
                                        >
                                            <div className="top-products-item">
                                                <div className="products-image">
                                                    <Link
                                                        href={`/product/${prod._id}`}
                                                    >
                                                        <a>
                                                            <Image
                                                                src={
                                                                    prod.imageUrl
                                                                }
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
                                                        <Link
                                                            href={`/product/${prod._id}`}
                                                        >
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
                                                            {[
                                                                ...Array(
                                                                    prod.rating
                                                                ),
                                                            ].map(
                                                                (
                                                                    rating: number,
                                                                    index: number
                                                                ) => (
                                                                    <i
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="bx bxs-star"
                                                                    ></i>
                                                                )
                                                            )}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <aside className="widget-area">
                            {/* <section className="widget widget_search">
                                <h3 className="widget-title">Search</h3>

                                <form className="search-form">
                                    <label>
                                        <span className="screen-reader-text">
                                            Search for:
                                        </span>
                                        <input
                                            type="search"
                                            className="search-field"
                                            placeholder="Search..."
                                        />
                                    </label>
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>
                            </section> */}

                            <section className="widget price_list_widget">
                                <h3 className="widget-title">Price</h3>

                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            // placeholder="$10"
                                            value={`$${product.price}`}
                                            readOnly
                                        />
                                        {/* <span className="form-control">
                                            $10
                                        </span> */}
                                    </div>
                                </form>
                            </section>

                            {/* <section className="widget widget_popular_products">
                                <h3 className="widget-title">
                                    Popular Products
                                </h3>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span
                                            className="fullimage cover bg1"
                                            role="img"
                                        ></span>
                                    </a>
                                    <div className="info">
                                        <span>$49.00</span>
                                        <h4 className="title usmall">
                                            <a href="#">
                                                Random Romance Novel Title
                                                Generator
                                            </a>
                                        </h4>
                                        <div className="rating">
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                        </div>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span
                                            className="fullimage cover bg2"
                                            role="img"
                                        ></span>
                                    </a>
                                    <div className="info">
                                        <span>$59.00</span>
                                        <h4 className="title usmall">
                                            <a href="#">
                                                Writing Exercises Story Title
                                                Ideas
                                            </a>
                                        </h4>
                                        <div className="rating">
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                        </div>
                                    </div>
                                </article>

                                <article className="item">
                                    <a href="#" className="thumb">
                                        <span
                                            className="fullimage cover bg3"
                                            role="img"
                                        ></span>
                                    </a>
                                    <div className="info">
                                        <span>$69.00</span>
                                        <h4 className="title usmall">
                                            <a href="#">
                                                Amaze Story Kitt Net&apos;s Book
                                                Ideas
                                            </a>
                                        </h4>
                                        <div className="rating">
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                        </div>
                                    </div>
                                </article>
                            </section> */}

                            <section className="widget widget_tag_cloud">
                                <h3 className="widget-title">
                                    Product categories
                                </h3>

                                <div className="tagcloud">
                                    {product.tags.map(
                                        (tag: string, index: number) => (
                                            <a href="#" key={index}>
                                                {tag}
                                            </a>
                                        )
                                    )}
                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}
