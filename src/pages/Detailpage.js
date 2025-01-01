import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/Detailpage.css';
const DetailPage = () => {
  const location = useLocation();
  const { article } = location.state;

  if (!article) {
    return (
      <div className="no-article">
        <div className="no-article-icon">📰</div>
        <h2 className="no-article-message">
          Oops! The article you're looking for couldn't be found.
        </h2>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="article-header">
        <h2 className="article-title">{article.title}</h2>
      </div>
      
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="article-image" 
        />
      )}
      
      <div className="article-content">
        <p>{article.content || article.description}</p>
      </div>
      
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="read-more-link"
      >
        Read Full Article
      </a>
    </div>
  );
};

export default DetailPage;