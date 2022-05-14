import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';

export default function LogoutPage() {
    const { setisAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        setisAuth(false);
        localStorage.setItem('isAuth', 'false');
        navigate('/');

    }, [setisAuth, navigate]);

    return (
        <p>Выполняется выход...</p>
    );

}
