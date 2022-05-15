import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context';
import CatalogPage from './pages/default/catalog/CatalogPage';
import AuthPage from './pages/default/auth/AuthPage';
import CartPage from './pages/user/cart/CartPage';
import ProtectedRoute from './components/elements/ProtectedRoute';
import LogoutPage from './pages/default/auth/LogoutPage';
import UIContextProvider from './context/UIContext';

function App() {
  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setisAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setisAuth }}>
      <UIContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path='/cart'
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route exact path='/' element={<CatalogPage />} />
            <Route exact path='/login' element={<AuthPage />} />
            <Route exact path='/logout' element={<LogoutPage />} />
          </Routes>
        </BrowserRouter>
      </UIContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
