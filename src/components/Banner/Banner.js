import React from "react";
import "./Banner.css";
import BannerImg from "./../../images/banner.jpg";

const Banner=()=>{


    return(
        <>
        <div className="lmcontainer">
            <div className="innerText">
                Free learning resources &nbsp;
                <strong>For Universities</strong>
                &nbsp; and &nbsp;
                <strong>For College Students</strong>
            </div>
            <button id="lmButton">X</button>
        </div>
        <div className="banner">
            <div className="bannerChild1">
                <h1 className="mainText">Learn Without Limits</h1>
                <p id="bannerInfo">Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                <button id="bannerButton">Join for Free</button>
            </div>
            <div className="bannerChild2">
                <img id="bannerImg" src={BannerImg} />
            </div>
        </div>
        </>
    )
}

export default Banner;