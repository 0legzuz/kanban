import React, {useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/Header/Header';
import BoardComponent from '../../components/Main/Main';
import { getTodos } from '../../../api';



const MainPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const token = localStorage.getItem('token');
        const fetchedCards = await getTodos(token);
        setCards(fetchedCards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const updateTodo = (newTodo) => {
    setCards(newTodo);
  };

  return (

      <div className="wrapper">
        <HeaderComponent updateTodo={updateTodo} />
        <BoardComponent cards={cards} />
        <Outlet />
      </div>

  );
};

export default MainPage;