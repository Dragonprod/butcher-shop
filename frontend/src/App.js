import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context';
import CatalogPage from './pages/default/catalog/CatalogPage';
import AuthPage from './pages/default/auth/AuthPage';
import CartPage from './pages/user/cart/CartPage';
import ProtectedRoute from './components/elements/ProtectedRoute';
import LogoutPage from './pages/default/auth/LogoutPage';
import UIContextProvider from './context/UIContext';
import ProfilePage from './pages/user/profile/ProfilePage';
import AdminPage from './pages/admin/AdminPage';
import OrdersPage from './pages/admin/orders/OrdersPage';

function App() {
  const [isAuth, setisAuth] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [apiToken, setapiToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setisAuth(true);
    }
    if (localStorage.getItem('isAdmin')) {
      setisAdmin(true);
    }
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    }
    if (localStorage.getItem('api_token')) {
      setapiToken(localStorage.getItem('api_token'));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
        isAdmin,
        setisAdmin,
        user,
        setUser,
        apiToken,
        setapiToken,
      }}>
      <UIContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<CatalogPage />} />
            <Route exact path='/login' element={<AuthPage />} />
            <Route
              exact
              path='/cart'
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='/logout'
              element={
                <ProtectedRoute>
                  <LogoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='/profile'
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='/admin'
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='/admin/orders'
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </UIContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
