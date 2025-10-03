import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoryPosts } from '../Features/Categories/categoriesSlice';
import './CategoryFilter.css';

const CategoryFilter = ({ categories }) => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchCategoryPosts(category));
  };

  return (
    <div className="category-filter">
      <div className="categories-container">
        {categories.map((category) => (
          <button
            className='category-button'
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