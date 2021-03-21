import React from "react";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="page-banner-area item-bg4">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-banner-content">
                            <h2>Login</h2>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
