import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Preloader from "@/components/Preloader";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="/assets/css/bootstrap.min.css"
                    />
                    <link rel="stylesheet" href="/assets/css/animate.min.css" />
                    <link rel="stylesheet" href="/assets/css/meanmenu.css" />
                    <link
                        rel="stylesheet"
                        href="/assets/css/boxicons.min.css"
                    />
                    <link rel="stylesheet" href="/assets/css/flaticon.css" />
                    <link
                        rel="stylesheet"
                        href="/assets/css/nice-select.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/css/owl.carousel.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/css/owl.theme.default.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/css/odometer.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/css/magnific-popup.min.css"
                    />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/responsive.css" />
                    <link rel="stylesheet" href="/assets/css/rating.css" />
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>
                <body>
                    <Preloader />
                    <Main />
                    <NextScript />

                    <script src="/assets/js/jquery.min.js"></script>
                    <script src="/assets/js/popper.min.js"></script>
                    <script src="/assets/js/bootstrap.min.js"></script>
                    <script src="/assets/js/jquery.meanmenu.js"></script>
                    <script src="/assets/js/jquery.nice-select.min.js"></script>
                    <script src="/assets/js/owl.carousel.min.js"></script>
                    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                    <script src="/assets/js/odometer.min.js"></script>
                    <script src="/assets/js/jquery.appear.min.js"></script>
                    <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
                    <script src="/assets/js/form-validator.min.js"></script>
                    <script src="/assets/js/contact-form-script.js"></script>
                    <script src="/assets/js/wow.min.js"></script>
                    <script src="/assets/js/main.js"></script>
                </body>
            </Html>
        );
    }
}
