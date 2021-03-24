import React, { useState } from "react";

export default function ReviewForm() {
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const titleChangeHandler = (e: any): void => {
        setTitle(e.target.value);
    };

    const descChangeHandler = (e: any): void => {
        setDesc(e.target.value);
    };

    return (
        <div className="review-form">
            <h3>Write a Review</h3>
            <form>
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
                    <div className="col-lg-12 col-md-12">
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
                                onChange={() => descChangeHandler(event)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn">
                            Submit Review
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
