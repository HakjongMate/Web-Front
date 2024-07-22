import React from "react";
import styled from "styled-components";
import AnalysisImage from "../../../assets/icons/Curriculum/analysis.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  background-color: #ffffff;
  margin-bottom: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  max-width: 1080px;
  min-width: 900px;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-bottom: 30px;
    min-width: unset;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    margin-bottom: 20px;
    width: 90%;
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
`;

const NumberCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #0f4abe;
  color: white;
  font-size: 15px;
  font-weight: 700;
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 12px;
    margin-right: 5px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #0f4abe;
  border-bottom: 1px solid #202594;
  padding-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const HighlightedText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #0f4abe;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 15px;
    white-space: pre-wrap;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    white-space: pre-wrap;
    margin-left: 15px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailImage = styled.img`
  width: 550px;
  height: 320px;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

function WhiteFive() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>5</NumberCircle>
        <Title>학생 생활기록부 진단</Title>
      </TitleContainer>

      <HighlightedText>
        지금까지의 강의내용과 선생님 사례 분석을{"\n"}
        토대로 학생의 생기부 상태를 진단합니다. <br />
        학생만의 생활기록부 분석 레포트를 제공하여{"\n"}
        맞춤형 입시 전략을 세웁니다.
      </HighlightedText>

      <Content>
        자율활동부터 세부능력 특기사항, 행동특성까지{"\n"}
        생활기록부를 분석하여 현재 학생 생기부의 상태를 수치화하고,
        <br />
        희망 대학과 학과에 맞는 앞으로의 생활기록부{"\n"}
        준비 방향성을 제시합니다.
      </Content>
      <Content>
        학생 생기부 분석 결과를 토대로{"\n"}
        앞으로의 방향성을 제시합니다.
      </Content>

      <ImageContainer>
        <DetailImage src={AnalysisImage} />
      </ImageContainer>
    </Container>
  );
}

export default WhiteFive;
