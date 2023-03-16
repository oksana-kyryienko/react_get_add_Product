import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
