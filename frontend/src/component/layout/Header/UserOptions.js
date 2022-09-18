import React, { Fragment, useState } from "react";
import "./Header.css";
import {SpeedDial, SpeedDialAction} from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {useHistory} from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const UserOptions = ({user}) => {

    const {cartItems} = useSelector((state) => state.cart);
    
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();
    
    const options = [
        {id: 1, icon: <ListAltIcon />, name: "Orders", func: orders},
        {id: 2, icon: <PersonIcon />, name: "Profile", func: account},
        {
            id: 3, 
            icon: <ShoppingCartIcon style={{color: cartItems.length > 0 ? "tomato" : "unset"}} />, 
            name: `Cart(${cartItems.length})`, 
            func: cart
        },
        {id: 4, icon: <ExitToAppIcon />, name: "Logout", func: logoutUser}
,    ];
    
    if (user.role === "admin") {
        options.unshift({id: 5, icon: <DashboardIcon />, name: "Dashboard", func: dashboard});
    }

    function dashboard() {
        history.push("/dashboard");
    }

    function orders() {
        history.push("/orders");
    }

    function account() {
        history.push("/account");
    }

    function cart() {
        history.push("/cart");
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout SuccessFully");
    }
    
    return (<Fragment>
        <Backdrop open={open} style={{zIndex: "10"}} />
        <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            style={{zIndex: "11"}}
            direction="down"
            className="speedDial"
            icon={<img
                className="speedDialIcon"
                src={user.avatar.url ? user.avatar.url: "/Profile.png"}
                alt="Profile"
                />
            }
        >
            {options.map((item) => (
                <SpeedDialAction 
                    icon={item.icon} 
                    key={item.id} 
                    tooltipTitle={item.name} 
                    onClick={item.func}
                    tooltipOpen={window.innerWidth <= 600 ? true : false}
                />
            ))}
        </SpeedDial>
    </Fragment>);
};

export default UserOptions;