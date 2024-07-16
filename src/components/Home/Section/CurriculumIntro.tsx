import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../CommonButton";
import CurriculumImage from "../../../assets/icons/Home/curriculum.png";

const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  width: 1080px;
`;

const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 25px;
`;

const IntroText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  margin-bottom: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

const DetailText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  margin: 30px 0;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

function CurriculumIntro() {
  const navigate = useNavigate();

  return (
    <WhiteContainer>
      <Container>
        <IntroTextContainer>
          <IntroText>생활기록부의 핵심은 '유기적인 구성'입니다.</IntroText>
        </IntroTextContainer>
        <DetailContainer>
          <DetailText>
            이를 위해서는 3개년을 미리 기획하고 학교생활을 하시는 것이 '압도적으로' 유리합니다.
          </DetailText>
          <DetailText>
            4주 생활기록부 디자인 완성 커리큘럼 및 주기적인 생활기록부 관리 커리큘럼으로
            생활기록부에 대해 완벽히 이해하고, 방향성을 설정합니다.
          </DetailText>
          <DetailText>
            학생부 종합 전형의 열쇠인 '생활기록부' 브랜딩 및 관리를 도와
            학생의 내신 대비 최상의 대학을 갈 수 있게끔 돕습니다.
          </DetailText>
        </DetailContainer>
        <ImageContainer>
          <StyledImage src={CurriculumImage} alt="Curriculum" />
        </ImageContainer>
        <ButtonContainer>
          <CommonButton to="/curriculum-details" text="커리큘럼 자세히 보기 >" children={null} />
        </ButtonContainer>
      </Container>
    </WhiteContainer>
  );
}

export default CurriculumIntro;