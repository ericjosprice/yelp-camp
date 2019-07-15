import React from "react";
import "./style.css"

function Header({children}) {
    return (
        <header 
        style={{ height: 300, clear: "both", paddingTop: 100, textAlign: "center" }}

        className="jumbotron">
            <div className="container">
                {children}
            </div>

        </header>
    );

}
export default Header;