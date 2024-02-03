import { Link } from 'react-router-dom';
import * as S from './ExitPageStyles';

const ExitPage = () => {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form>
            <S.PopExitFormGroup>
              <Link to="/">
                <S.PopExitButton>Да, выйти</S.PopExitButton>
              </Link>
              <Link to="/">
                <S.PopExitButton>Нет, остаться</S.PopExitButton>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default ExitPage;
