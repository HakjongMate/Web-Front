import React from "react";
import styled from "styled-components";
import MindImage from "../../../assets/icons/Home/mind_one.png";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  border-radius: 20px;
  flex-direction: column;
  margin: 30px 0;
  padding: 30px 50px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 20px;
  }

  @media (max-width: 480px) {
    margin: 15px 0;
    padding: 15px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const NumberIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 15px;
  font-family: "Pretendard-Bold";
  font-weight: 700;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 5px;
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 5px;
    width: 16px;
    height: 16px;
    font-size: 10px;
  }
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 7px;
  border-bottom: 1px solid #000;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TitleColorText = styled.div`
  color: #0f4abe;
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 7px;
  border-bottom: 1px solid #000;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const MindsetImage = styled.img`
  width: 480px;
  height: 250px;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const DetailColorText = styled.div`
  color: #0f4abe;
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 7px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

// 모바일 화면에서는 줄바꿈이 되도록 처리
const MobileDetailText = styled(DetailText)`
  @media (max-width: 480px) {
    display: block;
    white-space: pre-wrap;
  }
`;

const MobileDetailColorText = styled(DetailColorText)`
  @media (max-width: 480px) {
    display: block;
    white-space: pre-wrap;
  }
`;

function FirstMind() {
  return (
    <Container>
      <TitleContainer>
        <NumberIcon>1</NumberIcon>
        <TitleText>대학은 {"["}</TitleText>
        <TitleColorText>우수한 학생</TitleColorText>
        <TitleText>{"]"}을 원합니다.</TitleText>
      </TitleContainer>

      <ImageContainer>
        <MindsetImage src={MindImage} />
      </ImageContainer>

      <MobileDetailText>
        위는 2024 서울대학교 학생부종합전형 안내 자료 중{"\n"}일부를 발췌한 것입니다.
      </MobileDetailText>
      <MobileDetailText>
        "우수한 학업능력과 적극적인 학업태도, 바른 인성과 가치관"을 지닌{"\n"}학생을 선발하고자 합니다.
      </MobileDetailText>
      <MobileDetailColorText>
        비단, 서울대학교 뿐만 아니라 모든 대학교가{"\n"}"우수한 학생"을 선발하고 싶어합니다.
      </MobileDetailColorText>
    </Container>
  );
}

export default FirstMind;
