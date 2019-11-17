const headerSize = '60px';
const textColor = "#303030";
import styled from 'styled-components';
export const Header = styled.header`
  width: calc(100% - 32px);
  height: ${headerSize};
  background-color: #fff;
  border-bottom: 1px solid #8d8d8d;
  color: ${textColor};
  padding: 16px;
  position: relative;
  #menuIcon {
    top: 16px;
    right: 16px;
    position: absolute;
  }
  @media (min-width: 580px) {
    #menuIcon {
      display: none;
    }
  }
`;
export const LogoImg = styled.img`
  width: ${headerSize};
  height: ${headerSize};
  display: block;
  position: absolute;
  top: 0;
  left: 16px;
  bottom: 0;
  margin: auto;
`;
export const HeaderOrg = styled.div`
  width: calc(100% - ${headerSize});
  height: ${headerSize};
  margin-left: ${headerSize};
  display: none;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 580px){
    display: flex;
  }
`;
export const NavLink = styled.a`
  height: max-content;
  width: max-content;
  display: block;
  color: ${textColor};
  font-size: 20px;
  margin: 0 12px;
  &:hover {
    opacity: 0.7;
    text-decoration: none;
    color: ${textColor};
  }
  &:visited {
    color: ${textColor};
  }
  &:active {
    color: ${textColor};
  }
`;
export const MobileMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 16px;
  background-color: #fff;
  border: 1px solid #8d8d8d;
  border-radius: 4px;
  padding: 8px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  a {
    margin: 8px auto;
  }
`;
