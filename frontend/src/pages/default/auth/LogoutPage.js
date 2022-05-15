import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';

export default function LogoutPage() {
  const { setisAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setisAuth(false);
    localStorage.removeItem('isAuth');
    setTimeout(() => {
      navigate('/');
    }, 1000)

  }, [setisAuth, navigate]);

  return <p>Выполняется выход...</p>;
}
