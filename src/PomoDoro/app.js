import React, { useState } from 'react';
// import NavBar from './components/Header/NavBar.js';
import NavBar from 'components/Header/NavBar.js';

import Main from 'components/main/Main.js';
import Footer from 'components/footer/Footer.js';
import LoginForm from 'components/auth/LoginForm.js';
import Settings from 'components/settings/Settings.js';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <ThemeProvider>
      <div className="app">
        <NavBar 
          onLoginClick={() => setShowLoginForm(true)}
          onSettingsClick={() => setShowSettings(true)}
        />
        <Main />
        <Footer />
        
        {showLoginForm && (
          <LoginForm onClose={() => setShowLoginForm(false)} />
        )}
        
        {showSettings && (
          <Settings onClose={() => setShowSettings(false)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;