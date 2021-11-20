import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledCategory = styled.h6`
  ${({ theme }) => theme.typography.subtitle1};
  display: inline;
  float: right;
  margin-right: 10px;
  color: #fff;
  box-shadow: 0 1px 4px 0 #fff;
  padding: 10px;
  border-radius: 15px;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    color: #bb86fc;
    box-shadow: 0 1px 4px 0 #bb86fc;
  }
`;

function Category(props) {
  const history = useHistory();
  return (
    <StyledCategory
      onClick={() => {
        history.push(`/post/${props.category}`);
        window.location.reload();
      }}
    >
      {props.category}
    </StyledCategory>
  );
}

export default Category;
