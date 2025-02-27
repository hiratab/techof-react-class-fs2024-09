import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthContext } from './context/AuthContext'

import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

function App() {

  const { hasLoggedInUser } = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {hasLoggedInUser ? (<Route path="/users" element={<Users />} />) :
        (<>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </>)
      }
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
