import React from "react";

export default function CartItems() {
    return (
        <section className="cart-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <form>
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img
                                                        src="assets/img/top-products/top-products-1.jpg"
                                                        alt="item"
                                                    />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="shop-details.html">
                                                    Darling Oranges
                                                </a>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">
                                                    $455.00
                                                </span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn">
                                                        <i className="bx bx-minus"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value="1"
                                                    />
                                                    <span className="plus-btn">
                                                        <i className="bx bx-plus"></i>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">
                                                    $455.00
                                                </span>
                                                <a href="#" className="remove">
                                                    <i className="bx bx-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img
                                                        src="assets/img/top-products/top-products-2.jpg"
                                                        alt="item"
                                                    />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="shop-details.html">
                                                    Strawberry
                                                </a>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">
                                                    $541.50
                                                </span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn">
                                                        <i className="bx bx-minus"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value="1"
                                                    />
                                                    <span className="plus-btn">
                                                        <i className="bx bx-plus"></i>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">
                                                    $541.50
                                                </span>
                                                <a href="#" className="remove">
                                                    <i className="bx bx-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img
                                                        src="assets/img/top-products/top-products-3.jpg"
                                                        alt="item"
                                                    />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="shop-details.html">
                                                    Seasoned Tomatoes
                                                </a>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">
                                                    $140.50
                                                </span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn">
                                                        <i className="bx bx-minus"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value="1"
                                                    />
                                                    <span className="plus-btn">
                                                        <i className="bx bx-plus"></i>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">
                                                    $140.50
                                                </span>
                                                <a href="#" className="remove">
                                                    <i className="bx bx-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img
                                                        src="assets/img/top-products/top-products-4.jpg"
                                                        alt="item"
                                                    />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="shop-details.html">
                                                    Seasoned Carrot
                                                </a>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">
                                                    $547.00
                                                </span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn">
                                                        <i className="bx bx-minus"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value="1"
                                                    />
                                                    <span className="plus-btn">
                                                        <i className="bx bx-plus"></i>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">
                                                    $547.00
                                                </span>
                                                <a href="#" className="remove">
                                                    <i className="bx bx-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-buttons">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-sm-7 col-md-7">
                                        <a
                                            href="shop-1.html"
                                            className="default-btn"
                                        >
                                            Back to Shop
                                        </a>
                                    </div>
                                    <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                        <a href="#" className="default-btn">
                                            Update Cart
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-totals">
                                <h3>Cart Totals</h3>
                                <ul>
                                    <li>
                                        Subtotal
                                        <span>$1683.50</span>
                                    </li>
                                    <li>
                                        Shipping
                                        <span>$30.00</span>
                                    </li>
                                    <li>
                                        Total
                                        <span>
                                            <b>$1713.50</b>
                                        </span>
                                    </li>
                                </ul>
                                <a href="#" className="default-btn">
                                    Proceed to Checkout
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
