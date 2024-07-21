import React from "react";
import styled from "styled-components";
import MindImageOne from "../../../assets/icons/Home/mind_three.png";
import MindImageTwo from "../../../assets/icons/Home/mind_treee.png";

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
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    font-size: 10px;
  }
`;

const TitleText = styled.span`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 1px solid #000;
  padding-bottom: 7px;

  @media (max-width: 768px) {
    font-size: 20px;
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TitleColorText = styled(TitleText)`
  color: #0f4abe;
`;

const UnderlinedTitleText = styled.div`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 1px solid #000;
  padding-bottom: 7px;
  padding-left: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 5px;
    margin-left: 28px;
    padding-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 22px;
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
  width: 400px;
  height: 230px;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 35%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: auto;
  }
`;

const Space = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
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
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

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

function ThirdMind() {
  return (
    <Container>
      <TitleContainer>
        <TitleRow>
          <NumberIcon>3</NumberIcon>
          <TitleText>생활기록부의 목표는 [</TitleText>
          <TitleColorText>내신에서 드러나지 않는</TitleColorText>
          <TitleText>]</TitleText>
        </TitleRow>
        <UnderlinedTitleText>
          학생의 우수성을 보이기 위한 지표입니다.
        </UnderlinedTitleText>
      </TitleContainer>

      <ImageContainer>
        <MindsetImage src={MindImageOne} />
        <MindsetImage src={MindImageTwo} />
      </ImageContainer>

      <MobileDetailText>
        2023학년도 고려대학교 교과전형과 종합전형의 내신 비교입니다.
      </MobileDetailText>
      <MobileDetailText>
        1등급만 붙을 수 있는 학교추천전형과 다르게
      </MobileDetailText>
      <MobileDetailText>
        2등급이어도, 심지어는 3등급이어도 {"\n"}
        "학생부종합전형"으로는 고려대에 붙은 경우가 있습니다.
      </MobileDetailText>

      <Space />

      <MobileDetailColorText>
        종합적인 "생활기록부" 평가 방식을 통하여,
      </MobileDetailColorText>
      <MobileDetailColorText>
        단순히 점수를 합산하는 방식으로 평가하지 못했던
      </MobileDetailColorText>
      <MobileDetailColorText>
        학생들의 학업능력과 잠재력을 평가하여{"\n"}
        "우수한 학생"을 선발한다는 것입니다.
      </MobileDetailColorText>
    </Container>
  );
}

export default ThirdMind;