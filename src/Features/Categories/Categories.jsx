import React from 'react';
import { useSelector } from 'react-redux';
import CategoryFilter from '../../Components/CategoryFilter';
import PostSkeleton from '../../Components/PostSkeleton';


const Categories = () => {
  const categories = ['Popular', 'News', 'Technology', 'Funny'];
  const { status, error } = useSelector(state => state.categories);

if (status === 'loading') {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <CategoryFilter categories={categories} />
      {[...Array(1)].map((_, i) => <PostSkeleton key={i} />)}
    </div>
  );
}
if (status === 'failed') return <p style={{ paddingTop: 'var(--header-height)'}}>⚠️ Error loading category: {error}</p>

  return (
    <div style={{ paddingTop: 'var(--header-height)'}}>
      <CategoryFilter categories={categories} />
    </div>
  );
};

export default Categories;