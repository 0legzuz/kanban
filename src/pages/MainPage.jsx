
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/Header/Header';
import MainComponent from '../components/Main/Main';

import cards from '../data';

const MainPage = () => {
  return (
  

      <div className="wrapper">
        <HeaderComponent></HeaderComponent>
        <MainComponent cards={cards} />
        <Outlet/>
      </div>

  );
};

export default MainPage;
