import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { ProductType } from "@/types/index";
import { CartContext } from "@/utils/CartContext";

export default function CartItems() {
    const [cartItems, setCartItems] = useState<ProductType[]>([]);

    const { value, setValue } = useContext(CartContext);

    const deleteItemFromCart = (id: string): void => {
        setCartItems(cartItems.filter((value, index, arr) => value._id != id));
        setValue(value - 1);
        let pdts: string[] = JSON.parse(localStorage.getItem("cart")) || [];
        pdts = pdts.filter((value, index, arr) => value != id);
        localStorage.setItem("cart", JSON.stringify(pdts));
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
        <section className="cart-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <form>
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            {/* <th scope="col">Quantity</th> */}
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    {cartItems.length != 0 ? (
                                        <tbody>
                                            {cartItems.map(
                                                (
                                                    item: ProductType,
                                                    index: number
                                                ) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <Link
                                                                href={`/product/${item._id}`}
                                                            >
                                                                <a>
                                                                    <Image
                                                                        src={
                                                                            item.imageUrl
                                                                        }
                                                                        alt="item"
                                                                        width={
                                                                            80
                                                                        }
                                                                        height={
                                                                            80
                                                                        }
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">
                                                            <Link
                                                                href={`/product/${item._id}`}
                                                            >
                                                                <a>
                                                                    {item.name}
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="unit-amount">
                                                                ${item.price}
                                                            </span>
                                                        </td>
                                                        {/* <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn">
                                                        <i className="bx bx-minus"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value="1"
                                                    />
                                                    <span className="plus-btn">
                                                        <i className="bx bx-plus"></i>
                                                    </span>
                                                </div>
                                            </td> */}
                                                        <td className="product-subtotal">
                                                            <span className="subtotal-amount">
                                                                ${item.price}
                                                            </span>
                                                            <a
                                                                // href="#"
                                                                style={{
                                                                    cursor:
                                                                        "pointer",
                                                                }}
                                                                className="remove"
                                                                onClick={() =>
                                                                    deleteItemFromCart(
                                                                        item._id
                                                                    )
                                                                }
                                                            >
                                                                <i className="bx bx-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    ) : (
                                        <h4 className="d-flex justify-content-center">
                                            No Items in the cart yet
                                        </h4>
                                    )}
                                </table>
                            </div>
                            <div className="cart-buttons">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-sm-7 col-md-7">
                                        <Link href="/shop/1">
                                            <a className="default-btn">
                                                Back to Shop
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                        <a href="#" className="default-btn">
                                            Update Cart
                                        </a>
                                    </div> */}
                                </div>
                            </div>

                            <div className="cart-totals">
                                <h3>Cart Totals</h3>
                                <ul>
                                    <li>
                                        Subtotal
                                        <span>
                                            $
                                            {cartItems.length != 0
                                                ? cartItems
                                                      .reduce(
                                                          (
                                                              total: number,
                                                              cur: ProductType
                                                          ) =>
                                                              total + cur.price,
                                                          0
                                                      )
                                                      .toFixed(2)
                                                : (0.0).toFixed(2)}
                                        </span>
                                    </li>
                                    <li>
                                        Shipping
                                        <span>$20.00</span>
                                    </li>
                                    <li>
                                        Total
                                        <span>
                                            <b>
                                                $
                                                {cartItems.length != 0
                                                    ? (
                                                          cartItems.reduce(
                                                              (
                                                                  total: number,
                                                                  cur: ProductType
                                                              ) =>
                                                                  total +
                                                                  cur.price,
                                                              0
                                                          ) + 20
                                                      ).toFixed(2)
                                                    : (0.0).toFixed(2)}
                                            </b>
                                        </span>
                                    </li>
                                </ul>
                                {cartItems.length != 0 ? (
                                    <Link href="/checkout">
                                        <a className="default-btn">
                                            Proceed to Checkout
                                        </a>
                                    </Link>
                                ) : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
