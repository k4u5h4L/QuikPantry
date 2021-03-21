import React from "react";

export default function Products() {
    return (
        <section className="top-products-area pt-100 pb-100">
            <div className="container">
                <div className="orgo-grid-sorting row align-items-center">
                    <div className="col-lg-6 col-md-6 result-count">
                        {/* <p>
                            We found <span className="count">10</span> products
                            available for you
                        </p> */}
                        <p>Totally fresh and authentic goods.</p>
                    </div>

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
                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-1.jpg"
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
                                    <span className="new-price">$38.00</span>
                                    <span className="old-price">$125.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-2.jpg"
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
                                    <a href="shop-details.html">Strawberry</a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$30.00</span>
                                    <span className="old-price">$116.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-3.jpg"
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
                                    <a href="shop-details.html">Cabbage</a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$40.00</span>
                                    <span className="old-price">$179.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-4.jpg"
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
                                    <a href="shop-details.html">Nectarine</a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$45.00</span>
                                    <span className="old-price">$135.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-5.jpg"
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
                                        Seasoned Tomatoes
                                    </a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$68.00</span>
                                    <span className="old-price">$168.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-6.jpg"
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
                                        Seasoned Carrot
                                    </a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$30.00</span>
                                    <span className="old-price">$130.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-7.jpg"
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
                                    <a href="shop-details.html">Pineapple</a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$39.00</span>
                                    <span className="old-price">$139.00</span>
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

                    <div className="col-lg-3 col-md-6">
                        <div className="top-products-item">
                            <div className="products-image">
                                <a href="shop-details.html">
                                    <img
                                        src="assets/img/top-products/top-products-8.jpg"
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
                                    <a href="shop-details.html">Fresh Banana</a>
                                </h3>
                                <div className="price">
                                    <span className="new-price">$17.00</span>
                                    <span className="old-price">$115.00</span>
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

                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <a href="#" className="prev page-numbers">
                                <i className="flaticon-left-arrow"></i>
                            </a>
                            <a href="#" className="page-numbers">
                                1
                            </a>
                            <span
                                className="page-numbers current"
                                aria-current="page"
                            >
                                2
                            </span>
                            <a href="#" className="page-numbers">
                                3
                            </a>
                            <a href="#" className="page-numbers">
                                4
                            </a>
                            <a href="#" className="next page-numbers">
                                <i className="flaticon-right-arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
