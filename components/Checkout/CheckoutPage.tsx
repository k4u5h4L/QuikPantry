import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { useSession } from "next-auth/client";
// import { useRouter } from "next/router";

import { AddressType, ProductType } from "@/types/index";
import { CartContext } from "@/utils/CartContext";

export default function CheckoutPage({ ordered, setOrdered }) {
    const [cartItems, setCartItems] = useState<ProductType[]>([]);
    const [session] = useSession();

    const { value, setValue } = useContext(CartContext);

    const addressPlaceholder: AddressType = {
        country: "",
        fname: "",
        lname: "",
        address: "",
        town: "",
        state: "",
        zip: 0,
        email: "",
        phone: 0,
        notes: "",
    };

    // const router = useRouter();

    const AddressQuery = gql`
        query {
            AddressByEmail (email: "${session ? session.user.email : null}") {
                country
                fname
                lname
                address
                town
                state
                zip
                email
                phone
                notes
            }
        }
    `;

    const { data, error, loading } = useQuery(AddressQuery);

    if (loading) {
        <h2>Loading...</h2>;
    }

    // console.log(data);

    const [address, setAddress] = useState<AddressType>(addressPlaceholder);

    useEffect(() => {
        if (data) {
            setAddress(data.AddressByEmail);
        }

        // console.log("useEffect called for data");
    }, [data]);

    const saveOrder = async () => {
        const res = await fetch(`/api/orders/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: cartItems,
                email: session.user.email,
                address: address,
            }),
        });

        const data = await res.json();
    };

    const placeOrder = () => {
        if (session) {
            saveOrder();
        }

        setValue(0);
        setCartItems([]);
        localStorage.setItem("cart", "[]");
        setOrdered(true);

        // router.push(`/`);
        // alert("Order placed!");
        // alert("submitted");
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

                    // console.log(data);
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
                {!session ? (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <i className="bx bx-link-external"></i>
                                <span>
                                    Returning customer? Our sevices work better
                                    when you&apos;re logged in!{" "}
                                    <Link href="/login">
                                        <a>Click here to login</a>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                ) : null}

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
                                                        value={
                                                            address
                                                                ? address.country
                                                                : ""
                                                        }
                                                        onChange={(e) => {
                                                            setAddress({
                                                                ...address,
                                                                country:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
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
                                                value={
                                                    address ? address.fname : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        fname: e.target.value,
                                                    });
                                                }}
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
                                                value={
                                                    address ? address.lname : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        lname: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div> */}
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
                                                value={
                                                    address
                                                        ? address.address
                                                        : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        address: e.target.value,
                                                    });
                                                }}
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
                                                value={
                                                    address ? address.town : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        town: e.target.value,
                                                    });
                                                }}
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
                                                value={
                                                    address ? address.state : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        state: e.target.value,
                                                    });
                                                }}
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
                                                type="number"
                                                className="form-control"
                                                value={
                                                    address ? address.zip : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        zip: Number(
                                                            e.target.value
                                                        ),
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 col-md-6">
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
                                    </div> */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Phone
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                value={
                                                    address ? address.phone : ""
                                                }
                                                onChange={(e) => {
                                                    setAddress({
                                                        ...address,
                                                        phone: Number(
                                                            e.target.value
                                                        ),
                                                    });
                                                }}
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
                                            {cartItems.map(
                                                (
                                                    item: ProductType,
                                                    index: number
                                                ) => (
                                                    <tr key={index}>
                                                        <td className="product-name">
                                                            <Link
                                                                href={`/product/${item._id}`}
                                                            >
                                                                <a>
                                                                    {item.name}
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="subtotal-amount">
                                                                $
                                                                {item.price.toFixed(
                                                                    2
                                                                )}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            )}

                                            <tr>
                                                <td className="order-shipping">
                                                    <span>Shipping</span>
                                                </td>
                                                <td className="shipping-price">
                                                    <span>$20.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="total-price">
                                                    <span>Order Total</span>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">
                                                        $
                                                        {(
                                                            cartItems.reduce(
                                                                (
                                                                    total: number,
                                                                    cur: ProductType
                                                                ) =>
                                                                    total +
                                                                    cur.price,
                                                                0
                                                            ) + 20
                                                        ).toFixed(2)}
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
                                                // checked
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
                                            <label htmlFor="paypal">UPI</label>
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
