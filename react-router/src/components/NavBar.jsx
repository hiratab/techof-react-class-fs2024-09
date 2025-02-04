import { Link } from "react-router-dom";
import {
  navbar,
  navbarLink,
  navbarLinkDark,
} from "../styles"

function StyledLink(props) {
  return (
    <li>
      <Link
        style={navbarLink}
        to={props.to}
      >
        {props.text}
      </Link>
    </li>
  )
}

function NavBar() {
  return (
    <nav
      style={navbar}
    >
      <StyledLink to="/" text="Home" />
      <StyledLink to="/about" text="About" />
      <StyledLink to="/profile" text="Profile" />
      <li>
        <Link
          style={{
            ...navbarLink,
            ...navbarLinkDark,
          }}
          to="/posts"
        >
          Posts
        </Link>
      </li>
      <li>
        <Link
          style={navbarLink}
          to="/login"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          style={navbarLink}
          to="/sign-up">Sign

          Up
        </Link>
      </li>
    </nav>
  )
}

export default NavBar;