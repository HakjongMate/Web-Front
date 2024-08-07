import React from "react";
import styled from "styled-components";
import FirstMind from "../others/FirstMind";
import SecondMind from "../others/SecondMind";
import ThirdMind from "../others/ThirdMind";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 0 50px;
  width: 100%;
  max-width: 1080px;

  @media (max-width: 768px) {
    padding: 30px 20px 0 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px 0 10px;
  }
`;

const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IntroText = styled.div`
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 7px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const IntroBolderText = styled.div`
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 7px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BoldContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 7px;
  }

  @media (max-width: 480px) {
    margin-bottom: 5px;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  };
`;

const BoldText = styled.div`
  font-weight: 600;
  align-self: center;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BoldColorText = styled.div`
  font-weight: 600;
  align-self: center;
  font-size: 22px;
  margin: 0 10px;
  color: #202594;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 5px;
  }
`;

function Mindset() {
  return (
    <Container>
      <IntroTextContainer>
        <IntroText>학종메이트의 성공 이유</IntroText>
        <IntroBolderText>학생부 종합전형 마인드셋과 필승 공식</IntroBolderText>
      </IntroTextContainer>

      <DetailContainer>
        <DetailText>학생부 종합 전형으로 대학에 합격하기 위해서는</DetailText>
        <DetailText>대학에 맞는 '우수한 학생'이 되어야 합니다.</DetailText>
      </DetailContainer>

      <BoldContainer>
        <BoldText>학종메이트는</BoldText>
        <BoldColorText>"학생부 종합전형 마인드셋 3가지"</BoldColorText>
        <BoldText>와</BoldText>
      </BoldContainer>

      <BoldContainer>
        <BoldText>자체 연구·개발한 </BoldText>
        <BoldColorText>"세특 필승 SUCCESS 공식"</BoldColorText>
        <BoldText>으로 지도하여</BoldText>
      </BoldContainer>

      <BoldContainer>
        <BoldColorText>"우수한 학생"</BoldColorText>
        <BoldText>을 위한 올바른 방향을 제시합니다.</BoldText>
      </BoldContainer>

      <FirstMind />
      <SecondMind />
      <ThirdMind />
    </Container>
  );
}

export default Mindset;
