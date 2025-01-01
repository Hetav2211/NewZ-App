// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import { fetchTopHeadlines } from '../services/newsApi';
import '../Styles/CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log(`Fetching news for category: ${category}`);
        
        const articles = await fetchTopHeadlines('us', category);
        
        console.log(`Fetched articles for ${category}:`, {
          count: articles?.length,
          firstArticle: articles?.[0]
        });
        
        setNews(articles || []); // Ensure news is always an array
      } catch (err) {
        console.error('Error in CategoryPage:', err);
        setError('Failed to fetch news articles.');
        setNews([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading {category} news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      </div>
      <NewsList 
        news={news} 
        category={category} 
      />
    </div>
  );
};

export default CategoryPage;