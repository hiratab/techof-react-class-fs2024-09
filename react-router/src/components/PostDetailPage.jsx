import NavBar from "./NavBar";
import { useParams, Link, useNavigate } from 'react-router-dom';
import usePosts from "../hooks/usePosts";

function PostDetail(props) {
  return (
    <div
      key={props.id}
    >
      <Link to={`/posts/${props.id}`}>Title: {props.title}</Link>
      <p>{props.body}</p>
    </div>
  )
}

function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts] = usePosts();

  return (
    <>
      <NavBar />
      <div>
        {
          posts
            .filter(_post => Number(id) === Number(_post.id))
            .map(_post => <PostDetail {..._post} />)
        }
      </div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </>
  )
}

export default PostDetailPage;