import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;


export const CalendarP = styled.p`
  color: #353743;
  font-size: 12px;
  line-height: 1;

  span {
    color: #942f3f;
    font-weight:600;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;


export const CalendarPeriod = styled.div`
  padding: 10px 5px;
`;

export const Subtitle = styled.div`
  color: #353743;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 0 0 6px 5px;
`;