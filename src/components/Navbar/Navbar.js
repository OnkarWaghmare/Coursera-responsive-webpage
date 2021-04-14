import React from "react";
import "./Navbar.css"
import Logo from "./../../images/download.svg";
import Menu from "./../../images/Menu.png";
const Header=()=>{

    return (
    <>
        <div className="container">
            <img className="menu" alt="menuImg" className="menu" src={Menu}/>
            <div className="child1">
                <img alt="logoImg" src={Logo} className="logoImg"/>
                <div >
                    <button className="exporeMenu">
                        <span className="exploreMenuText">Explore</span>
                        <svg viewBox="0 0 32 32"><path fill="#fff" d="M30.054 14.429l-13.25 13.232q-0.339 0.339-0.804 0.339t-0.804-0.339l-13.25-13.232q-0.339-0.339-0.339-0.813t0.339-0.813l2.964-2.946q0.339-0.339 0.804-0.339t0.804 0.339l9.482 9.482 9.482-9.482q0.339-0.339 0.804-0.339t0.804 0.339l2.964 2.946q0.339 0.339 0.339 0.813t-0.339 0.813z"></path></svg>
                    </button>
                </div>
                <div className="form">
                    <input className="searchBox" placeholder="what do you want to learn?"></input>
                    <button className="searchButton">
                        <svg fill="#E1E1E1" style={{width:"16px", height:"16px"}}>
                        <path d="M11.355485,11.4503883 L16.0066609,16.1015642 L15.1015642,17.0066609 L10.4503883,12.355485 C9.34711116,13.2583262 7.93681293,13.8 6.4,13.8 C2.8653776,13.8 0,10.9346224 0,7.4 C0,3.8653776 2.8653776,1 6.4,1 C9.9346224,1 12.8,3.8653776 12.8,7.4 C12.8,8.93681293 12.2583262,10.3471112 11.355485,11.4503883 Z M6.4,12.52 C9.22769792,12.52 11.52,10.2276979 11.52,7.4 C11.52,4.57230208 9.22769792,2.28 6.4,2.28 C3.57230208,2.28 1.28,4.57230208 1.28,7.4 C1.28,10.2276979 3.57230208,12.52 6.4,12.52 Z">
                        </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="child2">
                <div className="forEnterprise">For Enterprise</div>
                <span>For Students</span>
                <ul style={{listStyleType:"none"}}>
                    <li ><a id="logIn" href="/">Log In</a></li>
                    <li id="joinForFree">Join for Free</li>
                </ul>
            </div>
        </div>
    </>
    );
}

export default Header;