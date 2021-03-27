import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function LoginForm() {
    const [session] = useSession();
    const [loading, setLoading] = useState<boolean>(false);

    const [emailData, setEmailData] = useState<string>("");

    const emailChangeHandler = (e: any) => {
        setEmailData(e.target.value);
    };

    return (
        <section className="login-area ptb-100">
            <div className="container">
                {!session ? (
                    <div className="login-form">
                        <h2>Login</h2>
                        <p>
                            A verification email will be sent to your email
                            address. Click on the link sent to be logged in.
                        </p>

                        <form
                            action="#"
                            onSubmit={(e) => {
                                e.preventDefault();

                                setLoading(true);

                                signIn("email", {
                                    email: emailData,
                                    callbackUrl: `${process.env.NEXTAUTH_URL}/login/verify/`,
                                    redirect: true,
                                });
                            }}
                        >
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    onChange={() => emailChangeHandler(event)}
                                />
                            </div>

                            {/* <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div> */}

                            {/* <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="checkme"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="checkme"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                                <a href="#" className="lost-your-password">
                                    Lost your password?
                                </a>
                            </div>
                        </div> */}

                            {loading ? (
                                <p className="d-flex justify-content-center">
                                    <Image
                                        src="/loading.gif"
                                        width={50}
                                        height={50}
                                    />
                                </p>
                            ) : null}

                            <button
                                type="submit"
                                className="default-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // signIn("email", emailData, {
                                    //     callbackUrl:
                                    //         "/login/verify",
                                    //     redirect: true,
                                    // });
                                    setLoading(true);
                                    signIn("email", {
                                        email: emailData,
                                        callbackUrl:
                                            "http://localhost:3000/login/verify/",
                                        redirect: true,
                                    });
                                }}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="login-form">
                        <h2>Verify login</h2>
                        <p>
                            Not <b>{session.user.name || session.user.email}</b>
                            ? Then logout and login again!
                        </p>
                        <button
                            type="button"
                            className="default-btn"
                            style={{ cursor: "pointer" }}
                            onClick={() => signOut()}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
