import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconBlue from "../assets/icons/HakjongMate_Blue.png";

const NavbarContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  height: 80px;
  margin: 0 auto;
`

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
`

const LogoName = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: #202594;
`;

const OtherLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OtherLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #202594;
  padding: 12px 12px;
  text-decoration: none;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <IconContainer to="/">
        <IconImage src={IconBlue} alt="HakjongMate" />
        <LogoName>HakjongMate</LogoName>
      </IconContainer>

      <OtherLinkContainer>
        <OtherLink to="/introduce">
          학종메이트 소개
        </OtherLink>
        <OtherLink to="/curriculum">
          커리큘럼
        </OtherLink>
        <OtherLink to="/review">
          수업 후기
        </OtherLink>
        <OtherLink to="/apply">
          수업 신청
        </OtherLink>
      </OtherLinkContainer>
    </NavbarContainer>
  )
}

export default Navbar;