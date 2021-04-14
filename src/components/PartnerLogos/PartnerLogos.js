import React from "react";
import "./PartnerLogos.css";
import Illinois from "./../../images/Partners/illinois.png";
import Duke from "./../../images/Partners/duke.png";
import Google from "./../../images/Partners/google.png";
import Umich from "./../../images/Partners/umich.jpg";
import Ibm from "./../../images/Partners/ibm.png";
import Imperial from "./../../images/Partners/imperial.png";
import Stanford from "./../../images/Partners/stanford.png";
import Penn from "./../../images/Partners/penn.png";

const PartnerLogo=()=>{
    return(
        <div className="logoContainer">
            <h2 className="logoHeading">
                <div>We collaborate with &nbsp;
                <span className="logoHeading02">200+ leading universities and companies</span>
                </div>
            </h2>
            <div className="partnerLogos">
                <img src={Illinois} className="illinois" alt="PartnerLogo"/>
                <img src={Duke} className="duke" alt="PartnerLogo"/>
                <img src={Google} className="google" alt="PartnerLogo"/>
                <img src={Umich} className="umich" alt="PartnerLogo"/>
                <img src={Ibm} className="ibm" alt="PartnerLogo"/>
                <img src={Imperial} className="imperial" alt="PartnerLogo"/>
                <img src={Stanford} className="stanford" alt="PartnerLogo"/>
                <img src={Penn} className="penn" alt="PartnerLogo"/>
            </div>
        </div>
    )
}
export default PartnerLogo;