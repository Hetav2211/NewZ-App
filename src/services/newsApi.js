// src/services/newsApi.js
import axios from 'axios';

// Use environment variable instead of hardcoded key
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchTopHeadlines = async (country = 'us', category = 'general') => {
  // Validate API key
  if (!API_KEY) {
    console.error('❌ No API Key Found!');
    throw new Error('Missing News API Key');
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country,
        category,
        apiKey: API_KEY
      }
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    throw error;
  }
};