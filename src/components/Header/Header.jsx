import { useState } from 'react';
import PopUserInfoComponent from '../PopUserInfo/PopUserInfo';
import * as S from './HeaderStyles';
import PopNewCardComponent from '../PopNewCard/PopNewCard';

const HeaderComponent = () => {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  const toggleUserInfo = () => {
    setIsUserInfoVisible(!isUserInfoVisible);
  };


  const [isPopNewCardVisible, setIsPopNewCardVisible] = useState(false);

  const togglePopNewCard = () => {
    setIsPopNewCardVisible(!isPopNewCardVisible);
  };
  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderNav>
            <S.MainButtonNew onClick={togglePopNewCard}>
              Создать новую задачу
            </S.MainButtonNew>

            <S.HeaderUser onClick={toggleUserInfo}>olegzuz</S.HeaderUser>
            {isUserInfoVisible && <PopUserInfoComponent />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
      <PopNewCardComponent
        isVisible={isPopNewCardVisible}
        onClose={togglePopNewCard}
      />
    </S.Header>
  );
};

export default HeaderComponent;
