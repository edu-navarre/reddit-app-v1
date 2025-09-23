import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from './categoriesSlice';
import { fetchPostDetails } from '../Posts/postsSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { selectedCategory, availableCategories } = useSelector(state => state.categories);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(fetchPostDetails(category)); // Fetch posts for the selected category
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        {availableCategories.map(category => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              style={{
                fontWeight: category === selectedCategory ? 'bold' : 'normal',
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;