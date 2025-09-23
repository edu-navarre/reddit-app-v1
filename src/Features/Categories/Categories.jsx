import React from 'react';
import CategoryFilter from '../../Components/CategoryFilter';

const Categories = () => {
  const categories = ['popular', 'news', 'technology', 'funny'];

  return (
    <div>
      <h2>Filter by Category</h2>
      <CategoryFilter categories={categories} />
    </div>
  );
};

export default Categories;