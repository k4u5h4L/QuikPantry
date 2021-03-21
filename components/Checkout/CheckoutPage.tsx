import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ProductType } from "@/types/index";
import { CartContext } from "@/utils/CartContext";

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState<ProductType[]>([]);

    const { value, setValue } = useContext(CartContext);

    const router = useRouter();

    const placeOrder = () => {
        setValue(0);
        setCartItems([]);
        localStorage.setItem("cart", "[]");
        router.push(`/`);
    };

    useEffect(() => {
        const getCartItems = async () => {
            if (localStorage.getItem("cart")) {
                try {
                    const res = await fetch(`/api/cart/items`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(localStorage.getItem("cart")),
                    });

                    const data: ProductType[] = await res.json();

                    console.log(data);
                    setCartItems(data);
                } catch (err: any) {
                    console.error("Error in fetching products");
                    setCartItems([]);
                }
            } else {
                setCartItems([]);
            }
        };

        getCartItems();
    }, []);

    return (
        <section className="checkout-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i className="bx bx-link-external"></i>
                            <span>
                                Returning customer?{" "}
                                <Link href="/login">
                                    <a>Click here to login</a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>
                                                Country
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <div className="select-box">
                                                <div className="form-group">
                                                    {/* <label>
                                                First Name
                                                <span className="required">
                                                    *
                                                </span>
                                            </label> */}
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                First Name
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Last Name
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Address
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Town / City
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                State / County
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Postcode / Zip
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Email Address
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Phone
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="create-an-account"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="create-an-account"
                                            >
                                                Create an account?
                                            </label>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="ship-different-address"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ship-different-address"
                                            >
                                                Ship to a different address?
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="notes"
                                                id="notes"
                                                cols={30}
                                                rows={5}
                                                placeholder="Order Notes"
                                                className="form-control"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>
                                <div className="order-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Product Name
                                                </th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="shop-details.html">
                                                        Darling Oranges
                                                    </a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">
                                                        $455.00
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="shop-details.html">
                                                        Strawberry
                                                    </a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">
                                                        $541.50
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="shop-details.html">
                                                        Cabbage
                                                    </a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">
                                                        $140.50
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="shop-details.html">
                                                        Nectarine
                                                    </a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">
                                                        $547.00
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-subtotal">
                                                    <span>
                                                        Seasoned Tomatoes
                                                    </span>
                                                </td>
                                                <td className="order-subtotal-price">
                                                    <span className="order-subtotal-amount">
                                                        $1683.50
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-shipping">
                                                    <span>Seasoned Carrot</span>
                                                </td>
                                                <td className="shipping-price">
                                                    <span>$30.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="total-price">
                                                    <span>Order Total</span>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">
                                                        $1713.50
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="payment-box">
                                    <div className="payment-method">
                                        <p>
                                            <input
                                                type="radio"
                                                id="direct-bank-transfer"
                                                name="radio-group"
                                                checked
                                            />
                                            <label htmlFor="direct-bank-transfer">
                                                Direct Bank Transfer
                                            </label>
                                            Make your payment directly into our
                                            bank account. Please use your Order
                                            ID as the payment reference. Your
                                            order will not be shipped until the
                                            funds have cleared in our account.
                                        </p>
                                        <p>
                                            <input
                                                type="radio"
                                                id="paypal"
                                                name="radio-group"
                                            />
                                            <label htmlFor="paypal">
                                                PayPal
                                            </label>
                                        </p>
                                        <p>
                                            <input
                                                type="radio"
                                                id="cash-on-delivery"
                                                name="radio-group"
                                            />
                                            <label htmlFor="cash-on-delivery">
                                                Cash on Delivery
                                            </label>
                                        </p>
                                    </div>
                                    <a
                                        onClick={() => placeOrder()}
                                        style={{ cursor: "pointer" }}
                                        className="default-btn"
                                    >
                                        Place Order
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
