import styled from 'styled-components';
export const Header = styled.header`
  width: calc(100% - 32px);
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #8d8d8d;
  color: #000;
  padding: 16px;
  position: relative;
`;
export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  top: 0;
  left: 16px;
  bottom: 0;
  margin: auto;
`;
export const HeaderOrg = styled.div`
  width: calc(100% - 100px);
  height: 100px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const NavLink = styled.a`
  height: max-content;
  width: max-content;
  display: block;
  color: #000;
  font-size: 32px;
  margin: 0 12px;
  &:hover {
    opacity: 0.7;
    text-decoration: none;
    color: #000;
  }
  &:visited {
    color: #000;
  }
  &:active {
    color: #000;
  }
`;
