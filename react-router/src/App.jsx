import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import ProfilePage from './components/ProfilePage';
import UserSettingsPage from './components/UserSettingsPage';
import UserPage from './components/UserPage';
import PostsPage from './components/PostsPage';
import PostDetailPage from './components/PostDetailPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/settings' element={<UserSettingsPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/posts/:id' element={<PostDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
