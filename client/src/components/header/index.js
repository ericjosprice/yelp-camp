import React from "react";
import "./style.css"

function Header({children}) {
    return (
        <header 
      

        className="jumbotron">
            <div className="container">
                {children}
            </div>

        </header>
    );

}
export default Header;