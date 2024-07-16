import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #0f4abe;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
`;

const Title = styled.div`
  font-size: 24px;
  font-family: "Pretendard-ExtraBold";
  color: white;
  margin-bottom: 10px;
`;

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Pretendard-SemiBold";
  width: 150px;
  padding: 8px 16px;
  margin-top: 50px;
  background-color: white;
  color: #0f4abe;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

function SemiFooter() {
  return (
    <FooterContainer>
      <FooterContent>
        <Title>생기부 컨설팅의 새로운 기준,</Title>
        <Title>학종 메이트와 함께 원하는 대학가기</Title>
        <StyledButton to="/apply">수업 신청하기</StyledButton>
      </FooterContent>
    </FooterContainer>
  );
}

export default SemiFooter;