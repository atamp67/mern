import "./App.css";
import React from "react";
import Header from "./component/layout/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WebFont from "webfontloader";
import Footer from  "./component/layout/Footer/footer"; 
import Home from "./component/Home/Home";
import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails.js";

function App() {

    React.useEffect(() => {
        WebFont.load({
            google: {
                families: ["Roboto", "Droid Sans", "Chilanka"]
            }
        });
    }, []);
    
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Footer />
        </Router>
    );
}

export default App;