import { Routes, Route } from 'react-router-dom';

import MainPage from './src/pages/MainPage';
import CardPage from './src/pages/CardPage';
import ExitPage from './src/pages/ExitPage/ExitPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/card/:cardId" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Route>
    </Routes>
  );
};
