import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar-modal">
            <div className="sidebar-modal-inner">
                <div className="sidebar-about-area">
                    <div className="title">
                        <h2>About Us</h2>
                        <p>
                            One helpless student from 6th sem B section, who has
                            speedran this project.
                        </p>
                    </div>
                </div>

                {/* <div className="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram1.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram2.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram3.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram4.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram5.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram6.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram7.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="assets/img/instagram/instagram8.jpg"
                                    alt="image"
                                />
                            </a>
                        </li>
                    </ul>
                </div> */}

                <div className="sidebar-contact-area">
                    <div className="contact-info">
                        <div className="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">+91 1333333337</a>
                                <span>OR</span>
                                <a href="mailto:kaushal.v.bhat@gmail.com">
                                    kaushal.v.bhat@gmail.com
                                </a>
                            </h2>

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
                </div>

                <span className="close-btn sidebar-modal-close-btn">
                    <i className="flaticon-cancel"></i>
                </span>
            </div>
        </div>
    );
}
