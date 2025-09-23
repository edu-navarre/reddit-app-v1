import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoryPosts } from '../Features/Categories/categoriesSlice';

const CategoryFilter = ({ categories }) => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchCategoryPosts(category));
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;