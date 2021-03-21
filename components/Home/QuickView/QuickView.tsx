import React from "react";

export default function QuickView() {
    return (
        <div
            className="modal fade productsQuickView"
            id="productsQuickView"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">
                            <i className="flaticon-cancel"></i>
                        </span>
                    </button>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="products-image"></div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="product-content">
                                <h3>Seasoned Tomatoes</h3>
                                <div className="price">
                                    <span className="new-price">$541.00</span>
                                    <span className="old-price">$652.00</span>
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
                                        5 reviews
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et.
                                </p>
                                <div className="product-add-to-cart">
                                    <div className="input-counter">
                                        <span className="minus-btn">
                                            <i className="bx bx-minus"></i>
                                        </span>
                                        <input
                                            onChange={() => alert("changed")}
                                            type="text"
                                            value="1"
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
                                    </button>
                                </div>

                                <div className="buy-checkbox-btn">
                                    <div className="item">
                                        <input
                                            className="inp-cbx"
                                            id="cbx"
                                            type="checkbox"
                                        />
                                        <label className="cbx" htmlFor="cbx">
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
                                        <a href="#" className="btn btn-light">
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
                </div>
            </div>
        </div>
    );
}
