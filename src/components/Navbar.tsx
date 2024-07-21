import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconBlue from "../assets/icons/HakjongMate_Blue.png";

interface SideMenuProps {
  isOpen: boolean;
}

const NavbarContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const IconContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const IconImage = styled.img`
  width: 30px;
  height: 34px;
  margin-right: 15px;
`;

const LogoName = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: #202594;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const MenuButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #202594;
  margin: 4px 0;

  @media (max-width: 768px) {
    width: 20px;
    height: 3px;
    margin: 3px 0;
  }

  @media (max-width: 425px) {
    width: 15px;
    height: 2px;
    margin: 2px 0;
  }
`;

const OtherLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideMenu = styled.div.attrs<SideMenuProps>(({ isOpen }) => ({
  style: {
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
  },
}))<SideMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-size: 24px;
`;

const OtherLink = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: #202594;
  padding: 12px 12px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 0;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    padding: 8px 0;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <IconContainer to="/">
        <IconImage src={IconBlue} alt="HakjongMate" />
        <LogoName>HakjongMate</LogoName>
      </IconContainer>

      <MenuButton onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </MenuButton>

      <OtherLinkContainer>
        <OtherLink to="/introduce">학종메이트 소개</OtherLink>
        <OtherLink to="/curriculum">커리큘럼</OtherLink>
        <OtherLink to="/review">수업 후기</OtherLink>
        <OtherLink to="/apply">수업 신청</OtherLink>
      </OtherLinkContainer>

      <SideMenu isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>×</CloseButton>
        <OtherLink to="/" onClick={toggleMenu}>
          홈으로
        </OtherLink>
        <OtherLink to="/introduce" onClick={toggleMenu}>
          학종메이트 소개
        </OtherLink>
        <OtherLink to="/curriculum" onClick={toggleMenu}>
          커리큘럼
        </OtherLink>
        <OtherLink to="/review" onClick={toggleMenu}>
          수업 후기
        </OtherLink>
        <OtherLink to="/apply" onClick={toggleMenu}>
          수업 신청
        </OtherLink>
        <OtherLink to="/login" onClick={toggleMenu}>
          로그인
        </OtherLink>
        <OtherLink to="/signup" onClick={toggleMenu}>
          회원가입
        </OtherLink>
      </SideMenu>
    </NavbarContainer>
  );
}

export default Navbar;
