import React from "react";
import Header from "../containers/header/Header";
import Navbar from "../containers/navigation/Navigation";
// import Post from "../containers/content/posts/Post";
import Content from "../containers/content/Content";


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