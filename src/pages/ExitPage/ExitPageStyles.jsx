import styled from 'styled-components';

export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #f7f6ef;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 2px;
  border: 0.7px solid#979d9d;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;