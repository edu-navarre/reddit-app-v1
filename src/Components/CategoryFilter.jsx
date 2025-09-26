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
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            padding: 'var(--space-xs) var(--space-sm)',
            margin: 'var(--space-xs)',
            fontWeight: 'var(--font-weight-bold)',
            cursor: 'pointer',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;