import styled from 'styled-components';
import CalendarComponent from '../components/Calendar/Calendar';
import { Link } from 'react-router-dom';

const PopBrowseContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

const PopBrowseContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #f7f6ef;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 2px;
  border: 0.7px solid#979d9d;
  position: relative;
`;

const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const PopBrowseTtl = styled.h3`
  color: #353743;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #979d9d;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #979d9d;
    letter-spacing: -0.14px;
  }
`;

const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #979d9d;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

const CardPage = () => {
  return (
    <PopBrowseContainer id="popBrowse">
      <PopBrowseContent>
        <PopBrowseBlock>
          <div>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи</PopBrowseTtl>
              <div>
                <p>Web Design</p>
              </div>
            </PopBrowseTopBlock>
            <div>
              <p>Статус</p>
              <StatusThemes>
                <StatusTheme>
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme>
                  <p>Нужно сделать</p>
                </StatusTheme>
                {/* ... other status themes ... */}
              </StatusThemes>
            </div>
            <PopBrowseWrap>
              <form>
                <FormBrowseBlock>
                  <label>Описание задачи</label>
                  <FormBrowseArea
                    name="text"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={''}
                  />
                </FormBrowseBlock>
              </form>
              <CalendarComponent />
            </PopBrowseWrap>
            <div>
              <p>Категория</p>
              <div>
                <p>Web Design</p>
              </div>
            </div>
            <div>
              <div>
                <a href="#">Редактировать задачу</a>
              </div>
              <div>
                <a href="#">Удалить задачу</a>
              </div>
            </div>
            <div>
              <div>
                <a href="#">Сохранить</a>
              </div>
              <div>
                <a href="#">Отменить</a>
              </div>
              <div>
                <a href="#">Удалить задачу</a>
              </div>
              <div>
                <Link to="/">Закрыть</Link>
              </div>
            </div>
          </div>
        </PopBrowseBlock>
      </PopBrowseContent>
    </PopBrowseContainer>
  );
};

export default CardPage;
