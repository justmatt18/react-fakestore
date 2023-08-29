/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import API from "../api/api";

export const ShopContext = createContext(null);

const getAllProducts = async () => {
    const res = await fetch(API.products);
    const data = await res.json();
    return data;
};

// assign prodcut ids to track items in cart
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 21; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getSingleProduct = async (itemId) => {
        const res = await fetch(`${API.getSingleProduct}${itemId}`);
        const data = await res.json();
        return data;
    };

    const addToCart = (itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: prevState[itemId] + 1,
        }));
    };

    const removeToCart = (itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: prevState[itemId] - 1,
        }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        getAllProducts,
        removeToCart,
        getSingleProduct,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
