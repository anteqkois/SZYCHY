
import React from "react";
import Navigation from "../containers/navigation/Navigation";
// import Post from "../containers/content/posts/Post";
import Content from "../containers/content/Content";
import Header from '../containers/header/Header';


function Main(){
    return(
        <div className="row">
            <div className="col-3">
                <Navigation />
            </div>
            <div>
                <Header />
                <Content />
            </div>
        </div>
    );

}

export default Main;
