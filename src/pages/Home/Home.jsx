import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import "./Home.css";
import Preloader from "../../components/preloader/Preloader";
import Product from "../../components/product/Product";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { getAllProducts } = useContext(ShopContext);

    useEffect(() => {
        results();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const results = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };

    return (
        <div className="container">
            <div className="row section-products">
                {products.length === 0 ? (
                    <Preloader />
                ) : (
                    products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
