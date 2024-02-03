
import CalendarComponent from '../Calendar/Calendar';
import * as S from './PopNewCardStyles';

const PopNewCardComponent = ({ isVisible, onClose }) => {
  return (
    <S.PopNewCard style={{ display: isVisible ? 'block' : 'none' }}>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.CloseButton onClick={onClose}>✖</S.CloseButton>
            <S.PopNewCardWrap>
              <S.PopNewCardForm>
                <S.FormBlock>
                  <S.Subtitle htmlFor="formTitle">Название задачи</S.Subtitle>
                  <S.FormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Subtitle htmlFor="textArea">Описание задачи</S.Subtitle>
                  <S.FormTextArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={''}
                  />
                </S.FormBlock>
              </S.PopNewCardForm>
              <CalendarComponent />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.CategoriesTheme>
                  <S.CategoriesThemeText>Web Design</S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <S.CategoriesThemeText>Research</S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <S.CategoriesThemeText>Copywriting</S.CategoriesThemeText>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.Categories>
            <S.CreateButton>Создать задачу</S.CreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCardComponent;
