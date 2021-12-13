import React from "react";
import Navbar from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import ContentDiscussion from "../contents/DiscussionContent/ContentDiscussion";

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