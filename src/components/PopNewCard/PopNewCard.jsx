// PopNewCardComponent.js
import React, { useState } from 'react';
import CalendarComponent from '../Calendar/Calendar';
import * as S from './PopNewCardStyles';
import { addTodo } from '../../../api'; // Update the path based on your project structure

const PopNewCardComponent = ({ isVisible, onClose ,updateTodo }) => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [topic, settopic] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date()); // Add state for selected date
  const handleCreateTask = async () => {
    try {
      const token = localStorage.getItem('token');
      const text = { title, description, topic, date: selectedDate }; // Include selectedDate in the text object
      const addedTodo = await addTodo(token, text);

      updateTodo(addedTodo);
      console.log('Task added successfully:', addedTodo);

      // Close the modal or perform other necessary actions
      onClose();
    } catch (error) {
      console.error('Error creating task:', error);
      // Handle the error as needed
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Subtitle htmlFor="textArea">Описание задачи</S.Subtitle>
                  <S.FormTextArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </S.FormBlock>
              </S.PopNewCardForm>
              <CalendarComponent onDateChange={handleDateChange} />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.CategoriesTheme>
                  <S.CategoriesThemeRadio
                    id="work"
                    name="category"
                    value="Работа"
                    checked={topic === 'Работа'}
                    onChange={() => settopic('Работа')}
                  />
                  <S.CategoriesThemeText htmlFor="work">
                    Работа
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <S.CategoriesThemeRadio
                    id="study"
                    name="category"
                    value="Учеба"
                    checked={topic === 'Учеба'}
                    onChange={() => settopic('Учеба')}
                  />
                  <S.CategoriesThemeText htmlFor="study">
                    Учеба
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <S.CategoriesThemeRadio
                    id="personal"
                    name="category"
                    value="Личное"
                    checked={topic === 'Личное'}
                    onChange={() => settopic('Личное')}
                  />
                  <S.CategoriesThemeText htmlFor="personal">
                    Личное
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.Categories>
            <S.CreateButton onClick={handleCreateTask}>
              Создать задачу
            </S.CreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCardComponent;
