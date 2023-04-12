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

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://skateboarding.transworld.net/feed/');
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, 'application/xml');
      const items = xmlDoc.getElementsByTagName('item');
      const articlesArray = [];
      for (let i = 0; i < items.length; i++) {
        const articleObj = {};
        articleObj.title = items[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
        articleObj.description = items[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
        articleObj.url = items[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;
        const enclosures = items[i].getElementsByTagName('enclosure');
        if (enclosures.length > 0) {
          articleObj.urlToImage = enclosures[0].getAttribute('url');
        }
        articlesArray.push(articleObj);
      }
      setArticles(articlesArray);
    };
    getArticles();
  }, []);

  return (
    <div>
      
      <NewsTitle>Recent News and Events in Skateboarding</NewsTitle>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;
