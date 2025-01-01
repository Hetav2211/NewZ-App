// src/components/NewsList.js
import React from 'react';
import NewsItem from './NewsItem';
import '../Styles/NewsList.css';

const NewsList = ({ news, category = 'general' }) => {
  // Comprehensive checks for news availability
  const isNewsAvailable = () => {
    // Check if news is defined, is an array, and has items
    return news && Array.isArray(news) && news.length > 0;
  };

  // Debugging log
  console.log('NewsList Component:', {
    newsReceived: news,
    newsType: typeof news,
    isArray: Array.isArray(news),
    newsLength: news?.length,
    category
  });

  // No news or invalid news data
  if (!isNewsAvailable()) {
    return (
      <div className="no-news-container">
        <div className="no-news-icon">📰</div>
        <h3>No Articles Found</h3>
        <p>We couldn't find any articles for the {category} category.</p>
        <div className="no-news-suggestions">
          <h4>Possible Reasons:</h4>
          <ul>
            <li>No articles available for this category</li>
            <li>Check your internet connection</li>
            <li>Try a different category</li>
            <li>Refresh the page</li>
          </ul>
        </div>
      </div>
    );
  }

  // Render news items
  return (
    <div className="news-list">
      {news.map((article, index) => {
        // Additional safety check for each article
        if (!article) return null;

        return (
          <NewsItem 
            key={article.title || index} 
            article={{
              ...article,
              category: category // Pass category to each NewsItem
            }} 
          />
        );
      })}
    </div>
  );
};

export default NewsList;