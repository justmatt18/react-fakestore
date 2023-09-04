/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
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
    const [fakeStoreItems, setFakeStoreItems] = useState([]);
    // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        getAllProducts().then((data) => {
            setFakeStoreItems(data);
        });
        !localStorage.getItem("products") && fakeStoreItems.length > 0;
        localStorage.setItem("products", JSON.stringify(fakeStoreItems));
    });

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

    const removeFromCart = (itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: prevState[itemId] - 1,
        }));
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: quantity,
        }));
    };

    const getTotalCartAmount = (products) => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let { price } = products.find(
                    (product) => product.id === Number(item)
                );
                total += price * cartItems[item];
            }
        }
        return total;
    };

    const contextValue = {
        fakeStoreItems,
        cartItems,
        addToCart,
        getAllProducts,
        removeFromCart,
        getSingleProduct,
        updateCartItemQuantity,
        getTotalCartAmount,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
