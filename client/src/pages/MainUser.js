import React from 'react';
// import Post from "../containers/content/posts/Post";
import Header from '../containers/header/Header';
import Navbar from '../containers/navigation/Navigation';
import ContentUser from './../containers/content/ContentUser';

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

function MainUser({ match }) {
  return (
    <div className="row">
      <div className="col-3">
        <Navbar />
      </div>
      <div>
        <Header />
        <ContentUser user={match.params.user} />
      </div>
    </div>
  );
}

export default MainUser;
