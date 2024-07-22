import React from "react";
import styled from "styled-components";
import MonthlyImage from "../../../assets/icons/Curriculum/monthly.png";

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
  font-weight: 600;
  font-size: 18px;
  color: #0f4abe;
  line-height: 1.5;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-left: 15px;
  }
  
  @media (max-width: 375px) {
    font-size: 14px;
    margin-left: 10px;
  }
  
  @media (max-width: 320px) {
    white-space: pre-wrap;
    font-size: 13px;
  }
`;

const Indent = styled(HighlightedText)`
  margin-left: 50px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-left: 25px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-left: 25px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    margin-left: 20px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
    margin-left: 15px;
  }
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
  margin-bottom: 5px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 25px;
    white-space: pre-wrap;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 25px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    margin-left: 20px;
  }
`;

const Space = styled.div`
  margin-bottom: 20px;
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

function WhitePlus() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>+</NumberCircle>
        <Title>생활기록부 브랜딩 및 관리</Title>
      </TitleContainer>

      <HighlightedText>
        1. 생기부 진단 내용 및 학생의 역량, {"\n"}
        진로 방향성을 토대로
      </HighlightedText>
      <Indent>학생의 생활기록부를 브랜딩 및 체계적으로 관리합니다.</Indent>

      <Content>
        결국 학생부 종합 전형에서의 핵심은{"\n"}
        내신과 세특을 통해 차별화된 생기부를 만들고, <br />
        이를 통해 학생의 역량을 적극적으로 어필해야 합니다.
      </Content>
      <Content>
        지금까지의 진단 내용과 학생의 역량,{"\n"}
        진로 방향성을 토대로 학생의 생활기록부를{"\n"}
        일반 학생과 다르게 브랜딩하고 관리 방향성을 제시합니다.
      </Content>

      <Space />

      <HighlightedText>
        2. 생활기록부 브랜딩의 방향성을{"\n"}
        주기적으로 점검하고, <br />
      </HighlightedText>
      <Indent>
        우수한 생활기록부 제공을 위해 학생의 활동에 대한{"\n"}
        월 말 레포트를 제공합니다.
      </Indent>

      <Content>
        이번 달 활동 회고 및 현재 생활기록부의{"\n"}
        강점 및 약점, 다음 달 목표 활동 및{"\n"}
        구체적 상황이 기재된 월말 레포트를 제공합니다.
      </Content>

      <ImageContainer>
        <DetailImage src={MonthlyImage} />
      </ImageContainer>
    </Container>
  );
}

export default WhitePlus;
