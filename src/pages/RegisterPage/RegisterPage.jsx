import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import * as S from '../LoginPage/LoginPageStyles';
import * as api from '../../../api'; // Import the api functions

const RegisterPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // State to manage user input values
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Function to handle registration button click
  const handleRegister = async () => {
    try {
      // Call the registerUser function from the api, passing user data
      const userData = { login, name, password };
      const response = await api.registerUser(userData);

      // Handle the response
      console.log('Registration successful!', response);

      // Save the token to localStorage
      localStorage.setItem('token', response.token);

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      // Handle registration failure, e.g., display an error message
      console.error('Error registering:', error.message);
    }
  };

  return (
    <S.CenteredContainer>
      <S.LoginWrapper>
        <Link to="/">
          <S.Logo src="#" alt="Logo" />
        </Link>
        <S.Header>Регистрация аккаунта</S.Header>
        <S.InputContainer>
          <S.FirstRow>
            <S.FirstInput
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </S.FirstRow>
          <S.FirstInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.PasswordInputContainer>
            <S.InputPassword
              type="password" // Change to password type for secure input
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.PasswordInputContainer>
        </S.InputContainer>
        <S.ButtonContainer>
          <S.LoginButton type="button" onClick={handleRegister}>
            Зарегистрироваться
          </S.LoginButton>
          <Link to="/login">
            <S.RegisterButton type="button">Войти</S.RegisterButton>
          </Link>
        </S.ButtonContainer>
      </S.LoginWrapper>
    </S.CenteredContainer>
  );
};

export default RegisterPage;
