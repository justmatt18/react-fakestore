import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Navbar = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <>
            <nav className="deep-purple darken-1">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">
                        FakeStore
                    </Link>
                    <Link
                        to="#"
                        data-target="mobile-demo"
                        className="sidenav-trigger"
                    >
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <i className="material-icons">shopping_cart</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>
                    <Link className="sidenav-close" to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link className="sidenav-close" to="/cart">
                        <i className="material-icons">shopping_cart</i>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
