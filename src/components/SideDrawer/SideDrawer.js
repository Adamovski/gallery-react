import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
    let drawerClasses = ["side-drawer"];
    if (props.show) {
        drawerClasses = [...drawerClasses, "open"];
    }
    return (
        <nav className={drawerClasses.join(" ")}>
            <ul>
                <li><a href="/">History</a></li>
                <li><a href="/">Park</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;