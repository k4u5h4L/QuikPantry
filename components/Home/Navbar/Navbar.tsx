import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

import { CartContext } from "@/utils/CartContext";

export default function Navbar() {
    const { value, setValue } = useContext(CartContext);
    const [search, setSearch] = useState<string>("");
    const [session] = useSession();

    const router = useRouter();

    const searchChangeHandler = (e: any): void => {
        setSearch(e.target.value);
    };

    const searchSubmitHandler = (): void => {
        router.push(`/search?q=${encodeURI(search)}`);
    };

    useEffect(() => {
        const cartItems: string[] =
            JSON.parse(localStorage.getItem("cart")) || [];
        setValue(cartItems.length);
    }, []);

    return (
        <div className="navbar-area">
            <div className="main-responsive-nav">
                <div className="container">
                    <div className="main-responsive-menu">
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/assets/logo.png"
                                        width={190}
                                        height={50}
                                        alt="image"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a className="navbar-brand">
                                <Image
                                    src="/assets/logo.png"
                                    width={190}
                                    height={50}
                                    alt="image"
                                />
                            </a>
                        </Link>
                        <div
                            className="collapse navbar-collapse mean-menu"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link">
                                            Home
                                            {/* <i className="bx bx-chevron-down"></i> */}
                                        </a>
                                    </Link>
                                    {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a
                                                href="index.html"
                                                className="nav-link active"
                                            >
                                                Home One
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="index-2.html"
                                                className="nav-link"
                                            >
                                                Home Two
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="index-3.html"
                                                className="nav-link"
                                            >
                                                Home Three
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="index-4.html"
                                                className="nav-link"
                                            >
                                                Home Four
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>

                                <li className="nav-item">
                                    <Link href="/login">
                                        <a className="nav-link">
                                            Login
                                            {/* <i className="bx bx-chevron-down"></i> */}
                                        </a>
                                    </Link>

                                    {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a
                                                href="about.html"
                                                className="nav-link"
                                            >
                                                About
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="team.html"
                                                className="nav-link"
                                            >
                                                Team
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="pricing.html"
                                                className="nav-link"
                                            >
                                                Pricing
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Gallery
                                                <i className="bx bx-chevron-down"></i>
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a
                                                        href="gallery.html"
                                                        className="nav-link"
                                                    >
                                                        Gallery
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="gallery-details.html"
                                                        className="nav-link"
                                                    >
                                                        Gallery Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="faq.html"
                                                className="nav-link"
                                            >
                                                FAQ
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Account
                                                <i className="bx bx-chevron-down"></i>
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/login">
                                                        <a className="nav-link">
                                                            Login
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="register.html"
                                                        className="nav-link"
                                                    >
                                                        Register
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="error-404.html"
                                                className="nav-link"
                                            >
                                                Error Page
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="terms-of-service.html"
                                                className="nav-link"
                                            >
                                                Terms of Service
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="privacy-policy.html"
                                                className="nav-link"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>

                                <li className="nav-item">
                                    <Link href="/shop/1">
                                        <a className="nav-link">
                                            Shop
                                            {/* <i className="bx bx-chevron-down"></i> */}
                                        </a>
                                    </Link>

                                    {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a
                                                href="services.html"
                                                className="nav-link"
                                            >
                                                Services
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="services-details.html"
                                                className="nav-link"
                                            >
                                                Services Details
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>

                                <li className="nav-item">
                                    <Link href="/cart">
                                        <a className="nav-link">
                                            Cart
                                            {/* <i className="bx bx-chevron-down"></i> */}
                                        </a>
                                    </Link>
                                </li>

                                {session ? (
                                    <>
                                        <li className="nav-item">
                                            <Link href="/orders">
                                                <a className="nav-link">
                                                    Orders
                                                    {/* <i className="bx bx-chevron-down"></i> */}
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/personal">
                                                <a className="nav-link">
                                                    For you
                                                    {/* <i className="bx bx-chevron-down"></i> */}
                                                </a>
                                            </Link>
                                        </li>
                                    </>
                                ) : null}

                                {/* <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Shop
                                        <i className="bx bx-chevron-down"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a
                                                href="shop-1.html"
                                                className="nav-link"
                                            >
                                                Shop List One
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="shop-2.html"
                                                className="nav-link"
                                            >
                                                Shop List Two
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="cart.html"
                                                className="nav-link"
                                            >
                                                Cart
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="checkout.html"
                                                className="nav-link"
                                            >
                                                Checkout
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="shop-details.html"
                                                className="nav-link"
                                            >
                                                Shop Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Blog
                                        <i className="bx bx-chevron-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a
                                                href="blog-1.html"
                                                className="nav-link"
                                            >
                                                Blog Two Column
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="blog-2.html"
                                                className="nav-link"
                                            >
                                                Blog Three Column
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="blog-3.html"
                                                className="nav-link"
                                            >
                                                Blog Four Column
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="blog-details.html"
                                                className="nav-link"
                                            >
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">
                                        Contact
                                    </a>
                                </li> */}
                            </ul>

                            <div className="others-options d-flex align-items-center">
                                {/* <div className="option-item">
                                    <div className="languages-list">
                                        <select>
                                            <option value="1">Eng</option>
                                            <option value="2">Ger</option>
                                            <option value="3">Span</option>
                                        </select>
                                    </div>
                                </div> */}

                                <div className="option-item">
                                    <div className="cart-btn">
                                        <Link href="/cart">
                                            <a>
                                                <i className="flaticon-shopping-cart"></i>
                                                {/* <span>{cartNo}</span> */}
                                                <span>{value}</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <form
                                        className="search-box"
                                        onSubmit={() => searchSubmitHandler()}
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            onChange={() =>
                                                searchChangeHandler(event)
                                            }
                                        />
                                        <button
                                            type="submit"
                                            onClick={() =>
                                                searchSubmitHandler()
                                            }
                                        >
                                            <i className="flaticon-search"></i>
                                        </button>
                                    </form>
                                </div>

                                {/* <div className="option-item">
                                    <div className="burger-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div> */}

                                {/* {localStorage.getItem("isInstalled") ==
                                "true" ? null : (
                                    <div className="option-item">
                                        <a
                                            className="default-btn add-button"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Install as PWA
                                        </a>
                                    </div>
                                )} */}

                                {/* <div className="option-item">
                                    <a
                                        className="default-btn add-button installPWA"
                                        style={{
                                            display: "none",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Install as PWA
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="others-option-for-responsive">
                <div className="container">
                    <div className="dot-menu">
                        <div className="inner">
                            <div className="circle circle-one"></div>
                            <div className="circle circle-two"></div>
                            <div className="circle circle-three"></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="option-inner">
                            <div className="others-options d-flex align-items-center">
                                {/* <div className="option-item">
                                    <div className="languages-list">
                                        <select>
                                            <option value="1">Eng</option>
                                            <option value="2">Ger</option>
                                            <option value="3">Span</option>
                                        </select>
                                    </div>
                                </div> */}

                                <div className="option-item">
                                    <div className="cart-btn">
                                        <Link href="/cart">
                                            <a>
                                                <i className="flaticon-shopping-cart"></i>
                                                {/* <span>{cartNo}</span> */}
                                                <span>{value}</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <form
                                        className="search-box"
                                        onSubmit={() => searchSubmitHandler()}
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            onChange={() =>
                                                searchChangeHandler(event)
                                            }
                                        />
                                        <button
                                            type="submit"
                                            onClick={() =>
                                                searchSubmitHandler()
                                            }
                                        >
                                            <i className="flaticon-search"></i>
                                        </button>
                                    </form>
                                </div>

                                {/* {localStorage.getItem("isInstalled") ==
                                "true" ? null : (
                                    <div className="option-item">
                                        <a
                                            className="default-btn add-button"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Install as PWA
                                        </a>
                                    </div>
                                )} */}

                                {/* <div className="option-item">
                                    <div className="burger-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
