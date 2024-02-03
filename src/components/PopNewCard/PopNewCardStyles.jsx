import styled from 'styled-components';

export const PopNewCard = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
  margin: 0 auto;
  background-color: #f7f6ef;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 4px;
  border: 1px solid #979d9d;
  position: relative;
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h3`
  color: #353743;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #979d9d;
  cursor: pointer;

  &:hover {
    color: #353743;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 100%;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 14px;
  background: transparent;
  border: 0.7px solid #979d9d;
  border-radius: 2px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #979d9d;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #979d9d;
    letter-spacing: -0.14px;
  }

  &:first-child {
    margin: 20px 0;
  }
`;

export const FormTextArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid #979d9d;
  border-radius: 2px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #979d9d;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    letter-spacing: -0.14px;
  }
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #398897;
  border-radius: 2px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #f7f6ef;
  float: right;
`;

export const Subtitle = styled.label`
  color: #353743;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: #353743;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 7px;
  opacity: 0.4;
`;

export const CategoriesThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;
