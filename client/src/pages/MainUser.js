import React from 'react';
// import Post from "../containers/content/posts/Post";
import Header from '../components/Header/Header';
import Navbar from '../components/Navigation/Navigation';
import ContentUser from './../contents/MainContent/ContentUser';

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
