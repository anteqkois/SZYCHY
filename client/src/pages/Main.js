
import React from "react";
// import Post from "../containers/content/posts/Post";
import Content from "../containers/content/Content";
import Header from '../containers/header/Header';
import Navbar from "../containers/navigation/Navigation";


function Main(){
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

export default Main;
