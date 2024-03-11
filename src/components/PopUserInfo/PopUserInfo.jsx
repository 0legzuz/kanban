
import { Link } from 'react-router-dom';
import * as S from './PopUserInfoStyles';



const PopUserInfoComponent = () => {
 const name =localStorage.getItem('name'); 
 const login = localStorage.getItem('login'); 
  return (
    <S.StyledPopUserSet>
      <S.Name>{login}</S.Name>
      <S.Mail>{name}</S.Mail>
      <S.Theme>
        <S.ThemeText>Темная тема</S.ThemeText>
        <S.Checkbox type="checkbox" name="checkbox" />
      </S.Theme>
      <Link to="/exit">
        <S.ExitButton>Выйти</S.ExitButton>
      </Link>
    </S.StyledPopUserSet>
  );
};

export default PopUserInfoComponent;
