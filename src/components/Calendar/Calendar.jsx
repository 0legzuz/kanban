// CalendarComponent.js
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import * as S from './CalendarStyles';
import { ru } from 'date-fns/locale';

const CalendarComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Notify the parent component about the date change
  };

  return (
    <S.CalendarContainer>
      <S.Subtitle>Даты:</S.Subtitle>
      <S.CalendarBlock>
        <DayPicker
          selected={selectedDate}
          onDayClick={handleDateChange}
          locale={ru}
        />
        <S.CalendarPeriod>
          <S.CalendarP>
            Срок исполнения: <span>{selectedDate.toLocaleDateString()}</span>
          </S.CalendarP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarContainer>
  );
};

export default CalendarComponent;
