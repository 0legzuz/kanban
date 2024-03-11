import styled from 'styled-components';
import ColumnComponent from '../Column/Column';
import PropTypes from 'prop-types';

const Main = styled.main`
  width: 100%;
  background-color: #ebeaea;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: 1260px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
`;

const statusList = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово'
];

const BoardComponent = ({ cards }) => {

  return (
    <Main>
      <Content>
        {cards.length === 0 ? (
          <div>Нет задач</div>
        ) : (
          statusList.map((status) => (
            <div key={status}>
              <ColumnComponent
                columnTitle={status}
                cards={cards.filter((card) => card.status === status)}
              />
            </div>
          ))
        )}
      </Content>
    </Main>
  );
};

BoardComponent.propTypes = {
  cards: PropTypes.array.isRequired
};

export default BoardComponent;
