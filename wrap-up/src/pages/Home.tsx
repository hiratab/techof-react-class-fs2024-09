import { useContext } from "react"
import { Button } from "@mui/material"

import { AuthContext } from "../context/AuthContext"

import BasePage from "./BasePage"

function Home() {
  const { logout } = useContext(AuthContext)
  return (
    <BasePage>
      <p>Home</p>
      <div>
        <Button variant="contained" onClick={() => logout()}>Log Out</Button>
      </div>
    </BasePage>
  )
}

export default Home
