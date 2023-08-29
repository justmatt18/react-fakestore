import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import ShopContextProvider from "./context/ShopContextProvider";

function App() {
    return (
        <div className="react-store">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
