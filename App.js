import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './resources/Navbar';
import AppRoutes from './Routes';
import Footer from './resources/Footer';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Navbar openLogin={openLogin} />
      <AppRoutes showLogin={showLogin} closeLogin={closeLogin} />
      <Footer />
    </div>
  );
};

export default App;