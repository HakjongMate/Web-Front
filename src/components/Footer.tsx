import React from "react";
import styled from "styled-components";

import IconBlue from "../assets/icons/HakjongMate_Blue.png";
import Instagram from "../assets/icons/instagram.webp";
import NaverBlog from "../assets/icons/naverblog.png";

const Container = styled.div`
  width: 100%;
  background-color: #f6f7fc;
`;

const FooterContainer = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  flex-direction: column;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  width: 26px;
  height: 30px;
  margin-right: 15px;
`;

const LogoName = styled.div`
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 200;
  color: #202594;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const InformationContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Information = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkImage = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledLink = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
`;

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <IconContainer>
          <IconImage src={IconBlue} alt="HakjongMate" />
          <LogoName>HakjongMate</LogoName>
        </IconContainer>
        <InformationContainer>
          <Information>
            러닝메이트 | 대표: 이건우 | 사업등록자 번호: 817-45-01107
          </Information>
          <Information>hakjongmate@gmail.com | 번호: 010-2827-8618</Information>
          <Information>
            주소: 서울특별시 성북구 개운사길 75-6, 3층 306호(안암동5가, 백산빌딩)
          </Information>
        </InformationContainer>

        <LinkContainer>
          <StyledLink href="https://blog.naver.com/hakjongmate" target="_blank" rel="noopener noreferrer">
            <LinkImage src={NaverBlog} alt="NaverBlog" />
          </StyledLink>
          <StyledLink href="https://www.instagram.com/hakjongmate/" target="_blank" rel="noopener noreferrer">
            <LinkImage src={Instagram} alt="Instagram" />
          </StyledLink>
        </LinkContainer>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
