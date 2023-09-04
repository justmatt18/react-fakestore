/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, price, description, image } = props.product;
    const { addToCart, removeFromCart, updateCartItemQuantity } =
        useContext(ShopContext);
    return (
        <div className="row cart-item card">
            <div className="col s6">
                <div className="row center-align">
                    <div className="col s4 product-img">
                        <img
                            src={image}
                            alt={title}
                            className="cart-img responsive-img"
                        />
                    </div>
                    <div className="col s8 truncate">
                        <p className="product-title truncate">{title}</p>
                        <p className="">{description}</p>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <div className="row center-align">
                    <div className="col s6">
                        <p>
                            <b>Price</b>
                        </p>
                        <p className="product-price">{price}</p>
                    </div>
                    <div className="col s6">
                        <p>Quantity</p>
                        <div className="countHandler center-align">
                            <div className="div col s12 m1 offset-m2">
                                <button onClick={() => removeFromCart(id)}>
                                    -
                                </button>
                            </div>
                            <div className="col s12 m4">
                                <input
                                    type="number"
                                    value={props.quantity}
                                    onChange={(e) => {
                                        let min = 1;
                                        let max = 250;
                                        const value = Math.max(
                                            min,
                                            Math.min(
                                                max,
                                                Number(e.target.value)
                                            )
                                        );
                                        updateCartItemQuantity(id, value);
                                    }}
                                />
                            </div>
                            <div className="div col s12 m1">
                                <button onClick={() => addToCart(id)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
