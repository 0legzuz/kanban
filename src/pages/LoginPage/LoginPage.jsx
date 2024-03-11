import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './LoginPageStyles';
import * as api from '../../../api'; // Import the api functions

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login button click
  const handleLogin = async () => {
    try {
      const userData = { login, password };

      const response = await api.loginUser(userData);
      const token = response.token;
      const name = response.name;
     

      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      localStorage.setItem('login', login);

      navigate('/');
      console.log('Login successful!', response);
    } catch (error) {
      // Handle login failure, e.g., display an error message
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <S.CenteredContainer>
      <S.LoginWrapper>
        <Link to="/">
          <S.Logo src="#" alt="Logo" />
        </Link>
        <S.Header>Вход в аккаунт</S.Header>
        <S.InputContainer>
          <S.FirstRow>
            <S.FirstInput
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </S.FirstRow>
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
          <S.LoginButton type="button" onClick={handleLogin}>
            Войти
          </S.LoginButton>
          <Link to="/register">
            <S.RegisterButton type="button">
              Зарегистрироваться
            </S.RegisterButton>
          </Link>
        </S.ButtonContainer>
      </S.LoginWrapper>
    </S.CenteredContainer>
  );
};

export default LoginPage;
