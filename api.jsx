const AUTH_BASE_URL = 'https://wedev-api.sky.pro/api/user';
const API_BASE_URL = 'https://wedev-api.sky.pro/api/kanban';

// Функция для регистрации нового пользователя
export const registerUser = async (userData) => {
  console.log(JSON.stringify(userData));
  try {
    const response = await fetch(`${AUTH_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      const data = await response.json();
      return data.user;
    } else {
      const errorData = await response.json();
      console.log(errorData);
    }
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Функция для входа пользователя
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    if (response.ok) {
      const data = await response.json();
      return data.user;
    } else if (response.status === 400) {
      throw new Error('Invalid login or password');
    } else {
      throw new Error(`Failed to login. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Функция для отправки GET запроса на получение списка задач
export const getTodos = async (token) => {
   console.log(token);
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
     
      return data.tasks;
    } else {
      throw new Error(`Failed to fetch todos. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Функция для отправки POST запроса на добавление новой задачи
export const addTodo = async (token, text) => {
  console.log(text);
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(text)
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data.tasks;
    } else {
      throw new Error(`Failed to add todo. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

// Функция для отправки DELETE запроса на удаление задачи по ID
export const deleteTodo = async (token, todoId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data.todos;
    } else if (response.status === 404) {
      throw new Error(`Todo with ID ${todoId} not found`);
    } else {
      throw new Error(`Failed to delete todo. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
