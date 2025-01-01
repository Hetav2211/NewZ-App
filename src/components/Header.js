import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  const categories = [
    'general', 'business', 'technology', 
    'sports', 'entertainment', 'health'
  ];

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {categories.map(category => (
          <Link 
            key={category} 
            to={`/category/${category}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;