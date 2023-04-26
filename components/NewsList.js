import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components';

const NewsWrapper = styled.div`
  text-align: center;
`;

const NewsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const NewsList = ({ onNewNewsCount }) => {
  const [articles, setArticles] = useState([]);
  const [lastFetchedArticleDate, setLastFetchedArticleDate] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=sports&from=2023-03-13&sortBy=publishedAt&apiKey=90bbf859b9e745a6981c810fe911c781'
      );
      const articlesArray = response.data.articles;

      let newArticlesCount = 0;
      articlesArray.forEach((article) => {
        if (
          lastFetchedArticleDate === null ||
          new Date(article.publishedAt) > lastFetchedArticleDate
        ) {
          newArticlesCount++;
        }
      });

      onNewNewsCount(newArticlesCount);

      setLastFetchedArticleDate(new Date(articlesArray[0].publishedAt));
      setArticles(articlesArray);
    };
    getArticles();
  }, [lastFetchedArticleDate, onNewNewsCount]);

  return (
    <NewsWrapper>
      <NewsTitle>Recent News for Sports</NewsTitle>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </NewsWrapper>
  );
};

export default NewsList;
