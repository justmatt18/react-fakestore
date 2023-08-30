import "./Cart.css";
import { ShopContext } from "../../context/ShopContextProvider";
import CartHeader from "../../components/cart/CartHeader";
import { useContext } from "react";

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const { cartItems, fakeStoreItems, getTotalCartAmount } =
        useContext(ShopContext);
    let totalAmount = getTotalCartAmount(fakeStoreItems);

    return (
        <div className="section container">
            <div className="cart-header">
                {totalAmount > 0 ? (
                    <CartHeader title={"Your Cart Items"} />
                ) : (
                    <CartHeader title={"Your Cart is Empty"} />
                )}
            </div>
        </div>
    );
};

export default Cart;
