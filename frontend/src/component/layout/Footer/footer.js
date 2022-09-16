import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>Download our app</h4>                
                <p>Download App For Android and IOS mobile phone </p>
                <img src={playStore} alt="PlayStore" />
                <img src={appStore} alt="AppStore" />
            </div>

            <div className="midFooter">
                <h1>Ecommerce</h1>
                 <p>Copyrights 2022 &copy; Ecommerce</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="/">Instagram</a>
                <a href="/">Youtube</a>
                <a href="/">Facebook</a>
            </div>            
        </footer>
    );
}

export default Footer;