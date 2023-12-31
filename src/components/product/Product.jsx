/* eslint-disable react/prop-types */
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import "./Product.css";
import M from "materialize-css";

const Product = (props) => {
    const { id, image, title, price, description } = props.product;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="col s12 m6 l3">
            <div className="card hoverable z-depth-4">
                <div className="card-image">
                    <img
                        className="circle responsive-img"
                        src={image}
                        alt={title}
                    />
                    <button
                        className="btn-floating halfway-fab waves-effect waves-light deep-orange accent-3"
                        onClick={() => {
                            M.toast({ html: `${title} added to cart` });
                            addToCart(id);
                        }}
                    >
                        <i className="material-icons">add_shopping_cart</i>
                    </button>
                </div>
                <div className="card-content teal lighten-5">
                    <p className="truncate product-title">{title}</p>
                    <p className="truncate">{description}</p>
                    <p className="truncate product-price">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
