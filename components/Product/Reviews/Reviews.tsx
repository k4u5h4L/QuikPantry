import React, { useState } from "react";
import { useSession } from "next-auth/client";

import { ReviewType } from "@/types/index";
import Link from "next/link";
import ReviewForm from "../ReviewForm/ReviewForm";

export default function Reviews({ product }) {
    const [session] = useSession();

    const [reviews, setReviews] = useState<boolean>(false);

    const ifAlreadyPosted = (): boolean => {
        if (!session) {
            return false;
        }
        const users: string[] = product.reviews.map(
            (review: ReviewType) => review.user
        );

        return !users.includes(session.user.email.split("@")[0]);
    };

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
                                                {product.reviews.length != 0 ? (
                                                    [
                                                        ...Array(
                                                            product.rating
                                                        ),
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
                                        {product.reviews.length != 0 ? (
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
                                                            <h3>
                                                                {review.title}
                                                            </h3>
                                                            <span>
                                                                <strong>
                                                                    {
                                                                        review.user
                                                                    }
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
                                        ) : (
                                            <h3>
                                                <hr />
                                                No reviews for this product yet
                                            </h3>
                                        )}

                                        {session && ifAlreadyPosted() ? (
                                            <ReviewForm pId={product._id} />
                                        ) : (
                                            <div className="review-form">
                                                <hr />
                                                {!ifAlreadyPosted() &&
                                                session ? (
                                                    <h3>
                                                        You seem to have already
                                                        posted a review!
                                                    </h3>
                                                ) : (
                                                    <>
                                                        <h3>
                                                            You can post
                                                            comments only when
                                                            you&apos;re logged
                                                            in.
                                                        </h3>
                                                        <Link href="/login">
                                                            <a className="default-btn">
                                                                Login
                                                            </a>
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        )}
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
