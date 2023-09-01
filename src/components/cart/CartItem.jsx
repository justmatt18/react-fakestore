/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, price, description, image } = props.product;
    const { addToCart, removeToCart } = useContext(ShopContext);
    return (
        <div className="row cart-item card">
            <div className="col s6">
                <div className="row">
                    {/* <div className="col s1">
                        <form action="#">
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="filled-in"
                                    />
                                    <span>Filled in</span>
                                </label>
                            </p>
                        </form>
                    </div> */}
                    <div className="col s4">
                        <img
                            src={image}
                            alt={title}
                            className="cart-img responsive-img"
                        />
                    </div>
                    <div className="col s8 truncate">
                        <p>{title}</p>
                        <p className="truncate">{description}</p>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <div className="row center-align">
                    <div className="col s6">
                        <p>Price</p>
                        <p>{price}</p>
                    </div>
                    <div className="col s6">
                        <p>Quantity</p>
                        <div className="item-quantity">
                            <button
                                onClick={() => {
                                    addToCart(id);
                                    console.log(
                                        `${title}, added to cart with ID: ${id}`
                                    );
                                }}
                            >
                                +
                            </button>
                            {props.quantity}
                            <button
                                onClick={() => {
                                    removeToCart(id);
                                    console.log(
                                        `new quantity: ${props.quantity}`
                                    );
                                }}
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
