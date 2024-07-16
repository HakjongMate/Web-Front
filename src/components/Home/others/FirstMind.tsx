import React from "react";
import styled from "styled-components";
import MindImage from "../../../assets/icons/Home/mind_one.png";

const Container = styled.div`
  display: flex;
  width: 1080px;
  border-radius: 20px;
  flex-direction: column;
  margin: 30px 50px;
  padding: 30px 50px;
  background-color: #ffffff;
  box-sizing: border-box; 
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
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
  margin-right: 10px;
`;

const TitleText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  padding-bottom: 7px;
  border-bottom: 1px solid #000;
`;

const TitleColorText = styled.div`
  color: #0f4abe;
  font-family: "Pretendard-Bold";
  font-size: 24px;
  padding-bottom: 7px;
  border-bottom: 1px solid #000;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const MindsetImage = styled.img`
  width: 480px;
  height: 250px;
`;

const DetailText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  margin-bottom: 5px;
`;

const DetailColorText = styled.div`
  color: #0f4abe;
  font-family: "Pretendard-SemiBold";
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 10px;
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

      <DetailText>
        위는 2024 서울대학교 학생부종합전형 안내 자료 중 일부를 발췌한 것입니다.
      </DetailText>
      <DetailText>
        "우수한 학업능력과 적극적인 학업태도, 바른 인성과 가치관"을 지닌 학생을 선발하고자 합니다.
      </DetailText>
      <DetailColorText>
        비단, 서울대학교 뿐만 아니라 모든 대학교가 "우수한 학생"을 선발하고 싶어합니다.
      </DetailColorText>
    </Container>
  );
}

export default FirstMind;
