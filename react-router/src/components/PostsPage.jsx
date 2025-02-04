import { Link, useNavigate } from 'react-router-dom';

import usePosts from '../hooks/usePosts';
import BasePage from './BasePage';
import Post from './Post';

import styles from  "../styles/posts.module.css";

function PostsPage() {
  const [posts, setPosts] = usePosts();
  const navigate = useNavigate();

  return (
    <BasePage>
      <button
        onClick={() => {
          navigate(1);
        }}
      >
        Forward
      </button>
      <div className={styles.container}>
        <Post title='Componente diferente' type='breaking-news' />
        {
          posts.map(post => <Post {...post} />)
        }
      </div>
    </BasePage>
  )
}

export default PostsPage;