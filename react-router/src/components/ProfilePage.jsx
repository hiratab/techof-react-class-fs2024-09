import { Link } from 'react-router-dom'

import NavBar from "./NavBar";

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Profile Page</h1>
        <Link to='/profile/settings'>User Settings</Link>
      </div>
    </div>
  )
}

export default ProfilePage;
