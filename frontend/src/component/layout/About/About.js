import React from "react";
import "./AboutSection.css";
import {Button, Typography, Avatar} from "@material-ui/core";
import YoutubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    const visitInstagram = () => {
        window.location = "http";
    };

    return(
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>
                <div>
                    <div>
                        <Avatar 
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0"}}
                            src="https://res.cloudinary.com/tripleayt/image/upload/"
                            alt="Founder" />

                        <Typography>User</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit Instagram 
                        </Button>
                        <span>
                            This is a sample Ecommerce website
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a href="#">
                            <YoutubeIcon className="youtubeSvgIcon" />
                        </a>
                        <a href="#">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

