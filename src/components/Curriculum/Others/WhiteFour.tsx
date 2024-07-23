import React from "react";
import styled from "styled-components";
import ConsultantImage from "../../../assets/icons/Curriculum/consultant.png";

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
    margin-left: 15px;
    white-space: pre-wrap;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const DetailImage = styled.img`
  width: 480px;
  height: 230px;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

function WhiteFour() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>4</NumberCircle>
        <Title>선생님 사례 분석</Title>
      </TitleContainer>

      <HighlightedText>
        선생님 사례를 통해 실제 입시 전략에 대한{"\n"}CASE STUDY를 진행하고,
        <br />
        본인의 전략에 대해 고민하는 시간을 가집니다.
      </HighlightedText>

      <Content>
        자율형 사립 고등학교 내신 1.7으로{"\n"}
        연세대 면접형, 고려대 특기자 전형에 합격한 선생님,
        <br />
        탄탄한 생활기록부 관리를 통한 전공 적합성을{"\n"}
        어필해 내신 1등급 후반으로 서울대에 합격한 선생님 등<br />
        실제 컨설팅을 진행하는 선생님들의{"\n"}
        생활기록부 분석본을 제공하며
      </Content>
      <Content>
        선생님의 입시 전략의 장점과 단점을{"\n"}
        분석하며 생기부에 대한 이해 및{"\n"}
        입시전략에 대한 시야를 넓힙니다.
      </Content>

      <ImageContainer>
        <DetailImage src={ConsultantImage} />
      </ImageContainer>
    </Container>
  );
}

export default WhiteFour;
