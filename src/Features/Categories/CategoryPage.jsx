import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryPosts } from './categoriesSlice';
import PostCard from '../../Components/PostCard';

function CategoryPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.categories.posts);

  useEffect(() => {
    dispatch(fetchCategoryPosts(category));
  }, [category, dispatch]);

  return (
    <div>
      <h2>Posts in {category}</h2>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default CategoryPage;