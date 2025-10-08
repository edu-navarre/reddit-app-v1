import React from 'react';
import { useSelector } from 'react-redux';
import CategoryFilter from '../../Components/CategoryFilter';
import PostSkeleton from '../../Components/PostSkeleton';
import ErrorMessage from '../../Components/ErrorMessage';



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
if (status === 'failed') return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <ErrorMessage
        message={`Error loading category: ${error}`}
        subtext="This could be due to high server load or a temporary network issue."
        onRetry={() => dispatch(fetchCategoryPosts(category))}
      />
    </div>
  );


  return (
    <div style={{ paddingTop: 'var(--header-height)'}}>
      <CategoryFilter categories={categories} />
    </div>
  );
};

export default Categories;