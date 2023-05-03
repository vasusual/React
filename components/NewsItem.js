import React from 'react';
import styled from 'styled-components';

const NewsApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsItemWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border: 5px solid teal;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const NewsImage = styled.img`
  width: 400px;
  border-radius: 10px;
`;

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <NewsApp>
      <NewsItemWrapper>
        <NewsImage src={urlToImage} alt={urlToImage} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </NewsItemWrapper>
    </NewsApp>
  );
};

export default NewsItem;