import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  )
}

export default NavBar;