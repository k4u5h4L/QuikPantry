import Link from "next/link";
import React from "react";

export default function Banner({ title, path }) {
    return (
        <div className="page-banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-banner-content">
                            <h2>{title}</h2>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>{path}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
