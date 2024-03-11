// ColumnComponent.jsx
import CardComponent from '../Card/Card';
import * as S from './ColumnStyles';
import PropTypes from 'prop-types';

const ColumnComponent = ({ columnTitle, cards }) => {

  const filteredCards = cards.filter((card) => card.status === columnTitle);

  return (
    <>
      <S.ColumnTitle>{columnTitle}</S.ColumnTitle>
      <S.CardsContainer>
        {filteredCards.map((card) => (
          <CardComponent
            key={card.id}
            theme={card.topic}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </S.CardsContainer>
    </>
  );
};

ColumnComponent.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired // Предполагается, что cards - это массив объектов
};

export default ColumnComponent;
