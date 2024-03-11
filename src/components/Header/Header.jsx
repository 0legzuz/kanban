import { useState } from 'react';
import PopUserInfoComponent from '../PopUserInfo/PopUserInfo';
import * as S from './HeaderStyles';
import PopNewCardComponent from '../PopNewCard/PopNewCard';

const HeaderComponent = ({ updateTodo }) => {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  const toggleUserInfo = () => {
    setIsUserInfoVisible(!isUserInfoVisible);
  };

  const [isPopNewCardVisible, setIsPopNewCardVisible] = useState(false);

  const togglePopNewCard = () => {
    setIsPopNewCardVisible(!isPopNewCardVisible);
  };
const login = localStorage.getItem('login');
  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderNav>
            <S.MainButtonNew onClick={togglePopNewCard}>
              Создать новую задачу
            </S.MainButtonNew>

            <S.HeaderUser onClick={toggleUserInfo}>{login}</S.HeaderUser>
            {isUserInfoVisible && <PopUserInfoComponent />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
      <PopNewCardComponent
        isVisible={isPopNewCardVisible}
        onClose={togglePopNewCard}
        updateTodo={updateTodo}
      />
    </S.Header>
  );
};

export default HeaderComponent;
