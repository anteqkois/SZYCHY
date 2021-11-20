import React from "react";
import Navbar from "../containers/navigation/Navigation";
import Header from "../containers/header/Header";
import ContentDiscussion from "../containers/discussion/ContentDiscussion";

function Discussion(){
    return(
        <div className="row">
            <div className="col-3">
                <Navbar />
            </div>
            <div>
                <Header />
                <ContentDiscussion/>
            </div>
        </div>
    );
}

export default Discussion;