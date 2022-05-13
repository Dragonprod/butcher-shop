import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/default/catalog/CatalogPage';
import AuthPage from './pages/default/auth/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CatalogPage />} />
        <Route exact path='/login' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
