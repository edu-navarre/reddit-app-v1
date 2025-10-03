import React from 'react';
import { useSelector } from 'react-redux';
import CategoryFilter from '../../Components/CategoryFilter';

const Categories = () => {
  const categories = ['popular', 'news', 'technology', 'funny'];
  const { status, error } = useSelector(state => state.categories);

if (status === 'loading') return <p>🔄 Loading category...</p>
if (status === 'failed') return <p>⚠️ Error loading category: {error}</p>

  return (
    <div style={{ paddingTop: 'var(--header-height)'}}>
      <CategoryFilter categories={categories} />
    </div>
  );
};

export default Categories;