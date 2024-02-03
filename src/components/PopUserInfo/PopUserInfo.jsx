
import { Link } from 'react-router-dom';
import * as S from './PopUserInfoStyles';



const PopUserInfoComponent = () => {
 
  return (
    <S.StyledPopUserSet>
      <S.Name>Ivan Ivanov</S.Name>
      <S.Mail>ivan.ivanov@gmail.com</S.Mail>
      <S.Theme>
        <S.ThemeText>Темная тема</S.ThemeText>
        <S.Checkbox type="checkbox" name="checkbox" />
      </S.Theme>
      <Link to='/exit'>
        <S.ExitButton>Выйти</S.ExitButton>
      </Link>
    </S.StyledPopUserSet>
  );
};

export default PopUserInfoComponent;
