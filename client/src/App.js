import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboard';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import ProfileSettingsPage from './pages/profile-settings';
import TemplateEditorPage from './pages/template-editor';
import MultiContextProvider from './contexts/MultiContextProvider';
import MobileMenu from './components/menus/mobile-menu';

function App() {
  return (
    <MultiContextProvider>
      <BrowserRouter>
        <MobileMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/template-editor/:templateId" element={<TemplateEditorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfileSettingsPage />} />
        </Routes>
      </BrowserRouter>
    </MultiContextProvider>
  );
}

export default App;
