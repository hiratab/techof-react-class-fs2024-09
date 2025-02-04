import { useState } from "react"

import "../styles/index.module.css"
import BasePage from "./BasePage";

function SignUpForm(props) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.value.length >= 3)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value.length > 6)
  }

  return (
    <div>
      <form>
        <div>
          <label
            for="email"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && <p>Email invalido</p>}
        </div>

        <div>
          <label
            for="password"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isValidPassword && <p>Senha invalida</p>}
        </div>


      </form>

      <button
        type="submit"
        onClick={() => {

        }}
      >
        Register
      </button>
    </div>
  )
}

function SignUpPage(props) {
  return (
    <BasePage>
      <h1>Sign Up</h1>
      <SignUpForm />
    </BasePage>
  )
}

export default SignUpPage;
