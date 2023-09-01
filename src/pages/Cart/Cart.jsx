import "./Cart.css";
import { ShopContext } from "../../context/ShopContextProvider";
import CartHeader from "../../components/cart/CartHeader";
import { useContext, useEffect } from "react";
import CartItem from "../../components/cart/CartItem";
import M from "materialize-css";

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const { cartItems, fakeStoreItems, getTotalCartAmount } =
        useContext(ShopContext);
    let totalAmount = getTotalCartAmount(fakeStoreItems);

    useEffect(() => {
        console.log(cartItems);
        M.AutoInit();
    }, [cartItems]);

    return (
        <div className="section container">
            <div className="cart-header">
                {totalAmount > 0 ? (
                    <CartHeader title={"Your Cart Items"} />
                ) : (
                    <CartHeader title={"Your Cart is Empty"} />
                )}
            </div>
            <div className="cart-items">
                {fakeStoreItems.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <CartItem
                                key={product.id}
                                quantity={cartItems[product.id]}
                                product={product}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Cart;
