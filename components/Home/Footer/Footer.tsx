import React from "react";
import Image from "next/image";

export default function Footer() {
    const picIndex: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="footer-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                {/* <h2>
                                    <a href="index.html">Orgo</a>
                                </h2> */}
                                <Image
                                    src="/assets/logo-full.png"
                                    width={210}
                                    height={140}
                                />
                            </div>
                            <p>
                                Done by a Linux nerd who accidently learnt web
                                tech.
                                <br />
                                Find his social links below
                            </p>
                            <ul className="social">
                                <li>
                                    <a
                                        href="https://github.com/k4u5h4L/"
                                        className="facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bx bxl-github"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        href="#"
                                        className="twitter"
                                        target="_blank"
                                    >
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </li> */}
                                <li>
                                    <a
                                        href="mailto:kaushal.v.bhat@gmail.com"
                                        className="google"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bx bxl-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/kaushal-bhat-8374451a2"
                                        className="linkedin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Instagram</h3>

                            <ul className="instagram-list">
                                {picIndex.map((pic, index) => (
                                    <li key={index}>
                                        <div className="box">
                                            <Image
                                                src={`https://templates.envytheme.com/orgo/default/assets/img/instagram/instagram${pic}.jpg`}
                                                alt="image"
                                                width={92}
                                                height={72}
                                            />
                                            <i className="bx bxl-instagram"></i>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn"
                                            ></a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Quick Links</h3>

                            <ul className="quick-links">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Our Services</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Faq</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Contact Us</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className="bx bxs-phone"></i>
                                    <span>Phone</span>
                                    <a href="tel:1333333337">
                                        (+91) 1333333337
                                    </a>
                                </li>
                                <li>
                                    <i className="bx bx-envelope"></i>
                                    <span>Email</span>
                                    <a href="mailto:kaushal.v.bhat@gmail.com">
                                        kaushal.v.bhat@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <i className="bx bx-map"></i>
                                    <span>Address</span>
                                    Bengaluru, India
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
