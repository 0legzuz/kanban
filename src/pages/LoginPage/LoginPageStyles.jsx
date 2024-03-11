import styled from 'styled-components';
import { Colors } from '../../AppStyles';


export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${Colors.light};
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 400px;
  height: 500px;
  border: 2px solid;
  background-color: ${Colors.light};
  z-index: 1;
`;

export const Road = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2) rotate(-30deg);
`;

export const Logo = styled.img`
  height: 70px;
  margin-bottom: 65px;
  margin-top: 10px;
`;

export const Header = styled.h1`
  color: ${Colors.dark};
  font-weight: 400;
  margin-bottom: 30px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  height: 50px;
  width: 340px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  color: ${Colors.green};
  border-width: 2px;
  border-color: ${Colors.dark};
  margin-bottom: 10px;
  padding-left: 10px;
  background-color: transparent;
`;

export const InputPassword = styled(Input)`
  padding-right: 45px;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FirstInput = styled(Input)`
  width: 300px;
`;

export const InfoButton = styled.button`
  height: 50px;
  width: 30px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 660;
  
  border-width: 2px;
  border-style: solid;
  
  background-color: transparent;
`;

export const PasswordInputContainer = styled.div`
  position: relative;
`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;
export const LoginButton = styled.button`
  height: 50px;
  width: 100px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  color: ${Colors.light};
  border-color: transparent;
  background-color: ${Colors.dark};
  margin-bottom: 10px;
`;
export const RegisterButton = styled(LoginButton)`
  width: 230px;
  
`;
