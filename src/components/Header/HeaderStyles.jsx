import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #f7f6ef;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;




export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainButtonNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 2px;
  background-color: #398897;
  color: #f7f6ef;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #353743;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #398897;

  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 2px;
    border-left: 1.9px solid #398897;
    border-bottom: 1.9px solid #398897;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #353743;
  }

  &:hover::after {
    border-left-color: #353743;
    border-bottom-color: #353743;
  }
`;
