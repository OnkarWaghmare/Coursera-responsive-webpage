import React from "react";
import "./Promo.css";
import PromoImg from "./../../images/PromoAd.png";
const Promo=()=>{
    return(
        <section className="promoContainer">
            <div className="promoChild1">
                <img src={PromoImg} alt="PromoImg" className="promoImg"/>
            </div>
            <div className="promoChild2">
                <h2 className="promoHeading">Learner outcomes on Coursera</h2>
                <div style={{fontSize:"20px", margin:"0px 0px 32px"}}>
                    <strong>87% of people learning</strong> for professional development 
                    <strong>report career benefits</strong> like getting a promotion, a raise, or starting a new career
                </div>
                <span style={{fontSize:"16px"}}>Coursera Learner Outcomes Survey (2019)</span>
                <div className="promolinks">
                    <button id="promoButton">Join for Free</button>
                    <a href="/" className="promoBusiness">Try Coursera for Business</a>
                </div>
            </div>
        </section>
    )
}
export default Promo;