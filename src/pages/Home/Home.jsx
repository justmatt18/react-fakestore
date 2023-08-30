/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import "./Home.css";
import Preloader from "../../components/preloader/Preloader";
import Product from "../../components/product/Product";
import { ShopContext } from "../../context/ShopContextProvider";

const Home = () => {
    const { fakeStoreItems } = useContext(ShopContext);

    return (
        <div className="section container">
            <div className="row section-products">
                {fakeStoreItems.length === 0 ? (
                    <Preloader />
                ) : (
                    fakeStoreItems.map((product) => (
                        <Product product={product} key={product.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
