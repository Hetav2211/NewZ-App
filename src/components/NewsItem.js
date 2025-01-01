// src/components/NewsItem.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NewsItem.css';

// Comprehensive Placeholder Image Mapping
const PLACEHOLDER_IMAGES = {
  general: '/placeholders/general.jpg',
  business: '/placeholders/business.jpeg',
  technology: '/placeholders/technology.jpeg',
  sports: '/placeholders/sports.jpg',
  entertainment: '/placeholders/entertainment.jpeg',
  health: '/placeholders/health.png',
  science: '/placeholders/science.jpeg',
  default: '/placeholders/default-news.jpeg'
};

const NewsItem = ({ article }) => {
  const [imageSrc, setImageSrc] = useState(null);

  // Determine placeholder based on category
  const getPlaceholderImage = (category) => {
    // Normalize category to lowercase
    const normalizedCategory = category?.toLowerCase().trim();
    
    // Check if category exists in placeholders, otherwise use default
    return PLACEHOLDER_IMAGES[normalizedCategory] || PLACEHOLDER_IMAGES.default;
  };

  // Image error handling
  const handleImageError = () => {
    // Determine placeholder based on article's category
    const placeholderImage = getPlaceholderImage(article.category);
    setImageSrc(placeholderImage);
  };

  // Initial image source setup
  useEffect(() => {
    // If no image, immediately set placeholder
    if (!article.urlToImage) {
      const placeholderImage = getPlaceholderImage(article.category);
      setImageSrc(placeholderImage);
    } else {
      // Try original image
      setImageSrc(article.urlToImage);
    }
  }, [article.urlToImage, article.category]);

  return (
    <div className="news-item">
      <div className="news-item-image-container">
        <img
          src={imageSrc || getPlaceholderImage(article.category)}
          alt={article.title || 'News Article'}
          onError={handleImageError}
          className="news-item-image"
        />
      </div>
      
      <div className="news-item-content">
        <h3 className="news-item-title">
          <Link 
            to={`/details`} 
            state={{ article }}
          >
            {article.title}
          </Link>
        </h3>
        
        <p className="news-item-description">
          {article.description || 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;