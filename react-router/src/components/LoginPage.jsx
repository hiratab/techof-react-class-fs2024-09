import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";

function LoginHeader() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    console.log(`email: ${email} password: ${password}`);
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Email:
          </label>
          <input
            type="email"
            ref={emailInputRef}
          />
        </div>

        <div>
          <label>
            Password:
          </label>
          <input
            type="password"
            ref={passwordInputRef}
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

function LoginPage() {
  return (
    <div>
      <NavBar />
      <LoginHeader />
      <LoginForm />
    </div>
  )
}

export default LoginPage;
