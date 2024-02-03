import styled from 'styled-components';

export const StyledPopUserSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 2px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #f7f6ef;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const ThemeText = styled.p`
  color: #353743;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const Name = styled.p`
  color: #353743;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const Mail = styled.p`
  color: #979d9d;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const Theme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 2px;
  background: #979d9d;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 2px;
    background-color: #353743;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const ExitButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #942f3f;
  border-radius: 2px;
  border: 1px solid #942f3f;

  a {
    color: #942f3f;
    text-decoration: none;
  }
`;
