import styled from 'styled-components';
import ColumnComponent from '../Column/Column';
import PropTypes from 'prop-types';
import { statusList } from '../../data';

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

const Column = styled.div`

`;

const MainComponent = ({ cards }) => {
  return (
    <Main>
  
        <Content>
          {statusList.map((status) => (
            <Column key={status}>
              <ColumnComponent
                columnTitle={status}
                cards={cards.filter((card) => card.status === status)}
              />
            </Column>
          ))}
        </Content>

    </Main>
  );
};

MainComponent.propTypes = {
  cards: PropTypes.array.isRequired
};

export default MainComponent;
