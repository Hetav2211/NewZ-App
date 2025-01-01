import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { fetchTopHeadlines } from '../services/newsApi';
import '../Styles/Home.css';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const articles = await fetchTopHeadlines();
        setNews(articles);
      } catch (err) {
        setError('Failed to fetch news articles.');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading Top Headlines...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">🚨</div>
        <h2 className="error-message">{error}</h2>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="headlines-header">
        <h2 className="headlines-title">Top Headlines</h2>
      </div>
      <div className="news-list-container">
        <NewsList news={news} />
      </div>
    </div>
  );
};

export default Home;