import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CategoryFilter.css';

const CategoryFilter = ({ categories }) => {
  const navigate = useNavigate();
  const { category: currentCategory } = useParams();

  const handleCategoryChange = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="category-filter">
      <div className="categories-container">
        {categories.map((category) => (
          <button
            className={`category-button ${category === currentCategory ? 'active' : ''}`}
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;