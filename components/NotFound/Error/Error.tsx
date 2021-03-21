import React from "react";
import Link from "next/link";

export default function Error() {
    return (
        <section className="error-area ptb-100">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="error-content">
                            <img
                                src="https://templates.envytheme.com/orgo/default/assets/img/404-error.png"
                                alt="error"
                            />

                            <h3>Error 404 : Page Not Found</h3>
                            <p>
                                The page you are looking for might have been
                                removed had its name changed or is temporarily
                                unavailable.
                            </p>

                            <Link href="/">
                                <a className="default-btn">Go to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
