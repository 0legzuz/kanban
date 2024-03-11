import { Link, useNavigate } from 'react-router-dom';
import * as S from './ExitPageStyles';

const ExitPage = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('name', '');
    localStorage.setItem('login', '');
    navigate('/login');
  };

  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form>
            <S.PopExitFormGroup>
              
              <S.PopExitButton type="button" onClick={handleExit}>
                
                Да, выйти
              </S.PopExitButton>
              <Link to="/">
                <S.PopNoExitButton>Нет, остаться</S.PopNoExitButton>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default ExitPage;
