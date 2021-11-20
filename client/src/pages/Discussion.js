import React from "react";
import Navbar from "../containers/navigation/Navigation";
import Header from "../containers/header/Header";
import Content from "../containers/content/Content";
function Discussion(){
    return(
        <div className="row">
            <div className="col-3">
                <Navbar />
            </div>
            <div>
                <Header />
                <Content />
            </div>
        </div>
    );
}

export default Discussion;