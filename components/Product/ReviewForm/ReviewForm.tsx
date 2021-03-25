import React, { useState } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function ReviewForm({ pId }) {
    const [session] = useSession();
    const router = useRouter();

    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [rating, setRating] = useState<number>(0);

    const titleChangeHandler = (e: any): void => {
        setTitle(e.target.value);
    };

    const descChangeHandler = (e: any): void => {
        setDesc(e.target.value);
    };

    const ratingChangeHandler = (r: number): void => {
        setRating(r);
    };

    const reviewSubmitHandler = async () => {
        const review = {
            title: title,
            desc: desc,
            user: session.user.email,
            rating: rating,
            date: new Date(),
        };
        // save date in a different format, so later on use a .toDateString() to get back the previous format

        // console.log(data);

        try {
            const res = await fetch(`/api/review/${pId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
            });

            const data = await res.json();
            router.reload();
        } catch (err: any) {
            console.error("Error in fetching products");
        }

        // console.log(data);
    };

    return (
        <div className="review-form">
            <h3>Write a Review</h3>
            <form onSubmit={() => reviewSubmitHandler()}>
                <div className="row">
                    {/* <div className="col-lg-6 col-md-6">
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
                    </div> */}
                    {/* <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                id="review-title"
                                name="review-title"
                                placeholder="Enter your review a title"
                                className="form-control"
                                onChange={() => titleChangeHandler(event)}
                            />
                        </div>
                    </div> */}
                    <div className="col-lg-9 col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                id="review-title"
                                name="review-title"
                                placeholder="Enter your review a title"
                                className="form-control"
                                required
                                onChange={() => titleChangeHandler(event)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 ordering">
                        <div className="form-group">
                            <div className="rating">
                                <input
                                    id="star5"
                                    name="star"
                                    type="radio"
                                    value={5}
                                    className="radio-btn hide"
                                    onClick={() => ratingChangeHandler(5)}
                                />
                                <label htmlFor="star5" style={{ fontSize: 27 }}>
                                    ☆
                                </label>
                                <input
                                    id="star4"
                                    name="star"
                                    type="radio"
                                    value={4}
                                    className="radio-btn hide"
                                    onClick={() => ratingChangeHandler(4)}
                                />
                                <label htmlFor="star4" style={{ fontSize: 27 }}>
                                    ☆
                                </label>
                                <input
                                    id="star3"
                                    name="star"
                                    type="radio"
                                    value={3}
                                    className="radio-btn hide"
                                    onClick={() => ratingChangeHandler(3)}
                                />
                                <label htmlFor="star3" style={{ fontSize: 27 }}>
                                    ☆
                                </label>
                                <input
                                    id="star2"
                                    name="star"
                                    type="radio"
                                    value={2}
                                    className="radio-btn hide"
                                    onClick={() => ratingChangeHandler(2)}
                                />
                                <label htmlFor="star2" style={{ fontSize: 27 }}>
                                    ☆
                                </label>
                                <input
                                    id="star1"
                                    name="star"
                                    type="radio"
                                    value={1}
                                    className="radio-btn hide"
                                    onClick={() => ratingChangeHandler(1)}
                                />
                                <label htmlFor="star1" style={{ fontSize: 27 }}>
                                    ☆
                                </label>
                                {/* <div className="clear"></div> */}
                            </div>
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
                                required
                                onChange={() => descChangeHandler(event)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <button
                            type="button"
                            className="default-btn"
                            onClick={() => reviewSubmitHandler()}
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
