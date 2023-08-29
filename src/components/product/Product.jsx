/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import "./Product.css";

const Product = (props) => {
    const { id, image, title, price } = props.product;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="col s12 m6 l4">
            <div className="card hoverable z-depth-4">
                <div className="card-image ">
                    <img className="responsive-img" src={image} alt={title} />
                    <Link
                        className="btn-floating halfway-fab waves-effect secondary-bg"
                        onClick={() => {
                            addToCart(id);
                            console.log(
                                `${title}, added to cart with ID: ${id}`
                            );
                        }}
                    >
                        <i className="material-icons">add_shopping_cart</i>
                    </Link>
                </div>
                <div className="card-content">
                    <p className="truncate product-title">{title}</p>
                    <p className="truncate product-price">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
