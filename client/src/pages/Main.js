import React from 'react';
import styled from 'styled-components';
// import Post from "../containers/content/posts/Post";
import Content from '../contents/MainContent/Content';
import ContentCategories from '../contents/MainContent/ContentCategories';
import Header from '../components/Header/Header';
import Navbar from '../components/Navigation/Navigation';
import Arrow from '../icons/arrow.png';

const ToUpContainer = styled.button`
  position: fixed;
  width: 48px;
  height: 48px;
  bottom: 35px;
  right: 35px;
  background: #3700b3;
  border: none;
  border-radius: 8px;
  padding: 1rem;
`;

const ArrowIcon = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

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

        <ToUpContainer onClick={() => window.scrollTo(0, 0)}>
          <ArrowIcon src={Arrow}></ArrowIcon>
        </ToUpContainer>
      </div>
    </div>
  );
}

export default Main;
