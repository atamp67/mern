import "./App.css";
import React from "react";
import Header from "./component/layout/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WebFont from "webfontloader";
import Footer from  "./component/layout/Footer/footer"; 
import Home from "./component/Home/Home";
import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";

function App() {

    const {isAuthenticated, user} = useSelector(state => state.user);

    React.useEffect(() => {
        WebFont.load({
            google: {
                families: ["Roboto", "Droid Sans", "Chilanka"]
            }
        });
        store.dispatch(loadUser());
    }, []);
    
    return (
        <Router>
            <Header />

            {isAuthenticated && <UserOptions user={user} />}
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:keyword" component={Products} />
            <Route exact path="/search" component={Search} />

            <ProtectedRoute exact path="/account" component={Profile} />

            <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

            <Route exact path="/login" component={LoginSignUp} />
            <Footer />
        </Router>
    );
}

export default App;