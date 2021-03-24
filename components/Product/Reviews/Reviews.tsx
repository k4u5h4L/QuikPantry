import { ReviewType } from "@/types/index";
import React, { useState } from "react";

export default function Reviews({ product }) {
    const [reviews, setReviews] = useState<boolean>(false);
    return (
        <div className="tab products-details-tab">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <ul className="tabs">
                        <li className={reviews ? "" : "current"}>
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setReviews(false)}
                            >
                                <div className="dot"></div>
                                Description
                            </a>
                        </li>
                        {/* classname="current" */}
                        <li className={reviews ? "current" : ""}>
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setReviews(true)}
                            >
                                <div className="dot"></div>
                                Reviews
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="tab_content">
                        {/* ###################################################### */}
                        {!reviews ? (
                            <div className="tabs_item">
                                <div className="products-details-tab-content">
                                    <p>{product.desc}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="tabs_item">
                                <div className="products-details-tab-content">
                                    <div className="product-review-form">
                                        <h3>Customer Reviews</h3>
                                        <div className="review-title">
                                            <div className="rating">
                                                {[...Array(product.rating)].map(
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
                                            </div>
                                            <p>
                                                Based on{" "}
                                                {product.reviews.length} reviews
                                            </p>
                                            {/* <a
                                                                href="#"
                                                                className="default-btn"
                                                            >
                                                                Write a Review
                                                            </a> */}
                                        </div>
                                        <div className="review-comments">
                                            {product.reviews.map(
                                                (
                                                    review: ReviewType,
                                                    index: number
                                                ) => (
                                                    <div
                                                        className="review-item"
                                                        key={index}
                                                    >
                                                        <div className="rating">
                                                            {[
                                                                ...Array(
                                                                    review.rating
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
                                                        </div>
                                                        <h3>{review.title}</h3>
                                                        <span>
                                                            <strong>
                                                                {review.user}
                                                            </strong>{" "}
                                                            on
                                                            <strong>
                                                                {" "}
                                                                {new Date(
                                                                    review.date
                                                                ).toDateString()}
                                                            </strong>
                                                        </span>
                                                        <p>{review.desc}</p>
                                                        {/* <a
                                                    href="#"
                                                    className="review-report-link"
                                                >
                                                    Report as Inappropriate
                                                </a> */}
                                                    </div>
                                                )
                                            )}
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
                                                                cols={30}
                                                                rows={7}
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
                                                            Submit Review
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* ###################################################### */}
                    </div>
                </div>
            </div>
        </div>
    );
}
