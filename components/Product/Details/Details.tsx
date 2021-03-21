import React from "react";

export default function Details() {
    return (
        <section className="product-details-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="product-details-image"></div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="product-details-desc">
                                    <h3>Seasoned Tomatoes</h3>
                                    <div className="price">
                                        <span className="new-price">
                                            $541.00
                                        </span>
                                        <span className="old-price">
                                            $652.00
                                        </span>
                                    </div>
                                    <div className="product-review">
                                        <div className="rating">
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                        </div>
                                        <a href="#" className="rating-count">
                                            3 reviews
                                        </a>
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
                                        <div className="input-counter">
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
                                        </div>
                                        <button
                                            type="submit"
                                            className="default-btn"
                                        >
                                            Add to cart
                                            <span></span>
                                        </button>
                                    </div>

                                    <div className="buy-checkbox-btn">
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
                                    </div>

                                    <div className="products-share">
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab products-details-tab">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <ul className="tabs">
                                        <li>
                                            <a href="#">
                                                <div className="dot"></div>
                                                Description
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="dot"></div>
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="tab_content">
                                        <div className="tabs_item">
                                            <div className="products-details-tab-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit, sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam quis nostrud
                                                    exercitation ullamco laboris
                                                    nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit
                                                    in voluptate velit esse
                                                    fugiat nulla pariatur.
                                                    Excepteur sint occaecat
                                                    cupidatat non proident sunt
                                                    in culpa qui officia
                                                    deserunt mollit anim id est
                                                    laborum. Sed ut perspiciatis
                                                    unde omnis iste.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="tabs_item">
                                            <div className="products-details-tab-content">
                                                <div className="product-review-form">
                                                    <h3>Customer Reviews</h3>
                                                    <div className="review-title">
                                                        <div className="rating">
                                                            <i className="bx bxs-star"></i>
                                                            <i className="bx bxs-star"></i>
                                                            <i className="bx bxs-star"></i>
                                                            <i className="bx bxs-star"></i>
                                                            <i className="bx bxs-star"></i>
                                                        </div>
                                                        <p>
                                                            Based on 3 reviews
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="default-btn"
                                                        >
                                                            Write a Review
                                                        </a>
                                                    </div>
                                                    <div className="review-comments">
                                                        <div className="review-item">
                                                            <div className="rating">
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span>
                                                                <strong>
                                                                    Admin
                                                                </strong>
                                                                on
                                                                <strong>
                                                                    Sep 21, 2020
                                                                </strong>
                                                            </span>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit,
                                                                sed do eiusmod
                                                                tempor
                                                                incididunt ut
                                                                labore et dolore
                                                                magna aliqua. Ut
                                                                enim ad minim
                                                                veniam, quis
                                                                nostrud
                                                                exercitation.
                                                            </p>
                                                            <a
                                                                href="#"
                                                                className="review-report-link"
                                                            >
                                                                Report as
                                                                Inappropriate
                                                            </a>
                                                        </div>
                                                        <div className="review-item">
                                                            <div className="rating">
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span>
                                                                <strong>
                                                                    Admin
                                                                </strong>
                                                                on
                                                                <strong>
                                                                    Sep 21, 2020
                                                                </strong>
                                                            </span>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit,
                                                                sed do eiusmod
                                                                tempor
                                                                incididunt ut
                                                                labore et dolore
                                                                magna aliqua. Ut
                                                                enim ad minim
                                                                veniam, quis
                                                                nostrud
                                                                exercitation.
                                                            </p>
                                                            <a
                                                                href="#"
                                                                className="review-report-link"
                                                            >
                                                                Report as
                                                                Inappropriate
                                                            </a>
                                                        </div>
                                                        <div className="review-item">
                                                            <div className="rating">
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                                <i className="bx bxs-star"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span>
                                                                <strong>
                                                                    Admin
                                                                </strong>
                                                                on
                                                                <strong>
                                                                    Sep 21, 2020
                                                                </strong>
                                                            </span>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit,
                                                                sed do eiusmod
                                                                tempor
                                                                incididunt ut
                                                                labore et dolore
                                                                magna aliqua. Ut
                                                                enim ad minim
                                                                veniam, quis
                                                                nostrud
                                                                exercitation.
                                                            </p>
                                                            <a
                                                                href="#"
                                                                className="review-report-link"
                                                            >
                                                                Report as
                                                                Inappropriate
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="review-form">
                                                        <h3>Write a Review</h3>
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            id="name"
                                                                            name="name"
                                                                            placeholder="Enter your name"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="email"
                                                                            id="email"
                                                                            name="email"
                                                                            placeholder="Enter your email"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            id="review-title"
                                                                            name="review-title"
                                                                            placeholder="Enter your review a title"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <textarea
                                                                            name="review-body"
                                                                            id="review-body"
                                                                            cols={
                                                                                30
                                                                            }
                                                                            rows={
                                                                                7
                                                                            }
                                                                            placeholder="Write your comments here"
                                                                            className="form-control"
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <button
                                                                        type="submit"
                                                                        className="default-btn"
                                                                    >
                                                                        Submit
                                                                        Review
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="related-shop">
                            <h4>Related Products</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="top-products-item">
                                        <div className="products-image">
                                            <a href="shop-details.html">
                                                <img
                                                    src="/assets/img/top-products/top-products-1.jpg"
                                                    alt="image"
                                                />
                                            </a>

                                            <ul className="products-action">
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
                                            </ul>

                                            <div className="sale">
                                                <span>Sale</span>
                                            </div>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <a href="shop-details.html">
                                                    Darling Oranges
                                                </a>
                                            </h3>
                                            <div className="price">
                                                <span className="new-price">
                                                    $38.00
                                                </span>
                                                <span className="old-price">
                                                    $125.00
                                                </span>
                                            </div>
                                            <ul className="rating">
                                                <li>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bx-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="top-products-item">
                                        <div className="products-image">
                                            <a href="shop-details.html">
                                                <img
                                                    src="/assets/img/top-products/top-products-2.jpg"
                                                    alt="image"
                                                />
                                            </a>

                                            <ul className="products-action">
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
                                            </ul>

                                            <div className="sale">
                                                <span>Sale</span>
                                            </div>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <a href="shop-details.html">
                                                    Strawberry
                                                </a>
                                            </h3>
                                            <div className="price">
                                                <span className="new-price">
                                                    $30.00
                                                </span>
                                                <span className="old-price">
                                                    $116.00
                                                </span>
                                            </div>
                                            <ul className="rating">
                                                <li>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bx-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="top-products-item">
                                        <div className="products-image">
                                            <a href="shop-details.html">
                                                <img
                                                    src="/assets/img/top-products/top-products-3.jpg"
                                                    alt="image"
                                                />
                                            </a>

                                            <ul className="products-action">
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
                                            </ul>

                                            <div className="sale">
                                                <span>Sale</span>
                                            </div>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <a href="shop-details.html">
                                                    Cabbage
                                                </a>
                                            </h3>
                                            <div className="price">
                                                <span className="new-price">
                                                    $40.00
                                                </span>
                                                <span className="old-price">
                                                    $179.00
                                                </span>
                                            </div>
                                            <ul className="rating">
                                                <li>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bx-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="top-products-item">
                                        <div className="products-image">
                                            <a href="shop-details.html">
                                                <img
                                                    src="/assets/img/top-products/top-products-4.jpg"
                                                    alt="image"
                                                />
                                            </a>

                                            <ul className="products-action">
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
                                            </ul>

                                            <div className="sale">
                                                <span>Sale</span>
                                            </div>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <a href="shop-details.html">
                                                    Nectarine
                                                </a>
                                            </h3>
                                            <div className="price">
                                                <span className="new-price">
                                                    $45.00
                                                </span>
                                                <span className="old-price">
                                                    $135.00
                                                </span>
                                            </div>
                                            <ul className="rating">
                                                <li>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bx-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <aside className="widget-area">
                            <section className="widget widget_search">
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
                            </section>

                            <section className="widget price_list_widget">
                                <h3 className="widget-title">Price</h3>

                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            // placeholder="$10"
                                            value="$10"
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
                                <h3 className="widget-title">Popular Tags</h3>

                                <div className="tagcloud">
                                    <a href="#">Architecture</a>
                                    <a href="#">Interior Design</a>
                                    <a href="#">Designing</a>
                                    <a href="#">Construction</a>
                                    <a href="#">Buildings</a>
                                    <a href="#">Industrial Factory</a>
                                    <a href="#">Material</a>
                                    <a href="#">Organic</a>
                                    <a href="#">Food</a>
                                    <a href="#">Tasty</a>
                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}
