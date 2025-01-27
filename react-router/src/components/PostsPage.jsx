import usePosts from '../hooks/usePosts';
import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom';

function Post(props) {
  return (
    <div
      key={props.id}
    >
      <Link to={`/posts/${props.id}`}>Title: {props.title}</Link>
    </div>
  )
}

function PostsPage() {
  const [posts, setPosts] = usePosts();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <button
        onClick={() => {
          navigate(1);
        }}
      >
        Forward
      </button>
      <div>
        {
          posts.map(post => <Post {...post} />)
        }
      </div>
    </>
  )
}

export default PostsPage;