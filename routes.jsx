import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Добавлен импорт для работы с состоянием

import CardPage from './src/pages/CardPage/CardPage';
import ExitPage from './src/pages/ExitPage/ExitPage';
import MainPage from './src/pages/MainPage/MainPage';
import NotFoundPage from './src/pages/NotFoundPage/NotFoundPage';
import LoginPage from './src/pages/LoginPage/LoginPage';
import RegisterPage from './src/pages/RegisterPage/RegisterPage';

export const AppRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? <MainPage /> : <Navigate to="/login" replace />
        }
      >
        <Route path="/card/:cardId" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
