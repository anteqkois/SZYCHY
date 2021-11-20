import React from 'react';
import Navigation from '../containers/navigation/Navigation';
// import Post from "../containers/content/posts/Post";
import Content from '../containers/content/Content';
import ContentCategories from '../containers/content/ContentCategories';
import Header from '../containers/header/Header';

function Main({ match }) {
  return (
    <div className="row">
      <div className="col-3">
        <Navigation />
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
