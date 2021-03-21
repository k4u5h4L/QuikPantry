import React from "react";

export default function LoginForm() {
    return (
        <section className="login-area ptb-100">
            <div className="container">
                <div className="login-form">
                    <h2>Login</h2>

                    <form>
                        <div className="form-group">
                            <label>Username or email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username or email"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>

                        <div className="row align-items-center">
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
                        </div>

                        <button type="submit" className="default-btn">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
