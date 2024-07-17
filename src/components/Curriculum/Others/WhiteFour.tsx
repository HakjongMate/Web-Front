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
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
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
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #0f4abe;
  border-bottom: 1px solid #202594;
  padding-bottom: 5px;
`;

const HighlightedText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #0f4abe;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const DetailImage = styled.img`
  width: 480px;
  height: 230px;
`;

function WhiteFour() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>4</NumberCircle>
        <Title>선생님 사례 분석</Title>
      </TitleContainer>

      <HighlightedText>
        선생님 사례를 통해 실제 입시 전략에 대한 CASE STUDY를 진행하고, <br />
        본인의 전략에 대해 고민하는 시간을 가집니다.
      </HighlightedText>

      <Content>
        자율형 사립 고등학교 내신 1.7으로 연세대 면접형, 고려대 특기자 전형에
        합격한 선생님,
        <br />
        탄탄한 생활기록부 관리를 통한 전공 적합성을 어필해 내신 1.7로 서울대에
        합격한 선생님 등<br />
        실제 컨설팅을 진행하는 선생님들의 생활기록부 분석본을 제공하며
      </Content>
      <Content>
        선생님의 입시 전략의 장점과 단점을 분석하며 생기부에 대한 이해 및
        입시전략에 대한 시야를 넓힙니다.
      </Content>

      <ImageContainer>
        <DetailImage src={ConsultantImage} />
      </ImageContainer>
    </Container>
  );
}

export default WhiteFour;
