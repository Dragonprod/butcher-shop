import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogPage from './pages/default/catalog/CatalogPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CatalogPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
