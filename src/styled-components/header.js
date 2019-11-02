import styled from 'styled-components';
export const Header = styled.header`
  width: calc(100% - 32px);
  min-height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #8d8d8d;
  color: #000;
  padding: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 16px;
  bottom: 0;
  margin: auto;
`;
