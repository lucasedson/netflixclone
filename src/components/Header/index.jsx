import React from "react";
import "./styles.css";



export default ({ black }) => {
    return (

        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo" />
                </a>
            </div>

            <div className="header--user">
                <a>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" ></img>
                </a>

            </div>
        </header >
    )
}