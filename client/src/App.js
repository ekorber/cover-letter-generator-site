import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboard';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import ProfileSettingsPage from './pages/profile-settings';
import TemplateEditorPage from './pages/template-editor';
import TemplateContext from './contexts/TemplateContext';
import UserContext, { defaultUserData } from './contexts/UserContext';
import axios from 'axios';

function App() {

  const [templates, setTemplates] = useState([]);
  const [userData, setUserData] = useState(defaultUserData);

  useEffect(() => {
    axios.post('/users/user-settings')
    .then(function(response) {
      setUserData(response.data)
    })
    .catch(function(error) {
      // Error handling goes here...
    })
  }, [])

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <TemplateContext.Provider value={{templates, setTemplates}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/template-editor/:templateId" element={<TemplateEditorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfileSettingsPage />} />
          </Routes>
        </BrowserRouter>
      </TemplateContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
