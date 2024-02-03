// data.js



export const statusList = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово'
];

const cards = [
  {
    id: 1,
    theme: 'Работа',
    title: 'В работе',
    date: '2023-01-15',
    status: statusList[2] // "В работе"
  },
  {
    id: 2,
    theme: 'Личное',
    title: 'Тренировка в спортзале',
    date: '2023-01-20',
    status: statusList[1] // "Нужно сделать"
  },
  {
    id: 3,
    theme: 'Учеба',
    title: 'Прочитать главу 5',
    date: '2023-01-18',
    status: statusList[4] // "Готово"
  },
  {
    id: 4,
    theme: 'Работа',
    title: 'В работе',
    date: '2023-01-25',
    status: statusList[2] // "В работе"
  },
  {
    id: 5,
    theme: 'Личное',
    title: 'Купить продукты',
    date: '2023-01-16',
    status: statusList[1] // "Нужно сделать"
  },
  // Добавленные карточки
  {
    id: 6,
    theme: 'Учеба',
    title: 'Написать научную статью',
    date: '2023-02-10',
    status: statusList[0] // "Без статуса"
  },
  {
    id: 7,
    theme: 'Работа',
    title: 'Подготовить презентацию',
    date: '2023-02-05',
    status: statusList[3] // "Тестирование"
  },
  {
    id: 8,
    theme: 'Личное',
    title: 'Запланировать выходные',
    date: '2023-02-12',
    status: statusList[1] // "Нужно сделать"
  },
  {
    id: 9,
    theme: 'Личное',
    title: 'Запланировать выходные',
    date: '2023-02-12',
    status: statusList[1] // "Нужно сделать"
  },
  {
    id: 10,
    theme: 'Работа',
    title: 'Запланировать выходные',
    date: '2023-02-12',
    status: statusList[1] // "Нужно сделать"
  }
];
export default cards