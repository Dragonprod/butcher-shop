import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';

export default function LogoutPage() {
  const { setisAuth, setisAdmin, setUser, setapiToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setisAuth(false);
    setisAdmin(false);
    setUser(null);
    setapiToken(null);
    localStorage.removeItem('isAuth');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('user');
    localStorage.removeItem('api_token');
    setTimeout(() => {
      navigate('/');
    }, 1000)

  }, [setisAuth, setisAdmin, setUser, setapiToken, navigate]);

  return <p>Выполняется выход...</p>;
}
