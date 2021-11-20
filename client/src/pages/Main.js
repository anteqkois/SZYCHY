import React from "react";
// import Post from "../containers/content/posts/Post";
import Content from '../containers/content/Content';
import ContentCategories from '../containers/content/ContentCategories';
import Header from '../containers/header/Header';
import Navbar from "../containers/navigation/Navigation";


// function Main(){
//     return(
//         <div className="row">
//             <div className="col-3">
//                 <Navbar />
//             </div>
//             <div>
//                 <Header />
//                 <Content />
//             </div>
//         </div>
//     );

function Main({ match }) {
  return (
    <div className="row">
      <div className="col-3">
        <Navbar />
      </div>
      <div>
        <Header />
        {match.params.category ? (
          <ContentCategories category={match.params.category} />
        ) : (
          <Content />
        )}
      </div>
    </div>
  );
}

export default Main;
