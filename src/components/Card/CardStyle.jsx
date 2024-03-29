import styled from 'styled-components';

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #f7f6ef;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 13px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 2px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  & div {
    width: 4px;
    height: 4px;
    background-color: #979d9d;
    border-radius: 1px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #353743;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
  }

  & p {
    margin-top: 2px;
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #979d9d;
    letter-spacing: 0.2px;
  }
`;
