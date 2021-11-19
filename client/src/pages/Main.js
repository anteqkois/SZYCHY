import React from "react";
import Navbar from "../containers/navigation/Navigation";
// import Post from "../containers/content/posts/Post";
import Content from "../containers/content/Content";
import Header from '../containers/header/Header';


function Main(){
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Content></Content>
        </div>
    );
}

export default Main;