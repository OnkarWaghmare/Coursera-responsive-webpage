import React from "react";
import "./Goals.css";
import LearnIcon from "./../../images/Goals/Icon-Learn.png";
import CareerIcon from "./../../images/Goals/Icon-Get-Ready.png";
import DegreeIcon from "./../../images/Goals/Icon-Earn-Degree.png";
import UpskillIcon from "./../../images/Goals/Icon-Upskill-your-org.png"
const Goals=()=>{
    return(
        <section className="goalsContainer">
            <h2>Achieve your goals with Coursera</h2>
            <ul className="listOfGoals">
                <li className="goalItem">
                    <div><img src={LearnIcon} id="learnIcon"/></div>
                    <div>
                        <b className="iconHeading"> 
                        Learn the
                        <br/>
                        latest skills
                        </b>
                        <br/>
                        <small>like business analytics, graphic design, Python, and more</small>
                    </div>
                </li>
                <li className="goalItem">
                    <div><img src={CareerIcon} id="careerIcon"/></div>
                    <div>
                        <b className="iconHeading">
                        Get ready
                        <br/>
                        for a career
                        </b>
                        <br/>
                        <small>in high-demand fields like IT, AI and cloud engineering</small>
                    </div>
                </li>
                <li className="goalItem">
                    <div><img src={DegreeIcon} id="degreeIcon"/></div>
                    <div>
                        <b className="iconHeading">
                        Earn
                        <br/>
                        a degree
                        </b>
                        <br/>
                        <small>from a leading university in business, computer science, and more</small>
                    </div>
                </li>
                <li className="goalItem">
                    <div><img src={UpskillIcon} id="upskillIcon"/></div>
                    <div>
                        <b className="iconHeading">
                        Upskill your
                        <br/>
                        organization
                        </b>
                        <br/>
                        <small>with on-demand training and development programs</small>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default Goals;