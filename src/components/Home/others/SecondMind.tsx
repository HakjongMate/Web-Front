import React from "react";
import styled from "styled-components";
import MindImage from "../../../assets/icons/Home/mind_two.png";

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
  height: 320px;
`;


const DetailText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  margin-bottom: 5px;
`;

const DetailColorText = styled.div`
  color: #0f4abe;
  font-family: "Pretendard-SemiBold";
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
function SecondMind() {
  return (
    <Container>
      <TitleContainer>
        <NumberIcon>2</NumberIcon>
        <TitleText>{"["}</TitleText>
        <TitleColorText>우수성</TitleColorText>
        <TitleText>{"]"}은 높은 내신에서만 드러나는 것이 아닙니다.</TitleText>
      </TitleContainer>

      <ImageContainer>
        <MindsetImage src={MindImage} />
      </ImageContainer>

      <DetailText>
        마찬가지로 2024 서울대학교 학생부종합전형 안내 자료 중 일부를 발췌한 것입니다.
      </DetailText>
      <DetailText>
        "학교생활기록부에 기반을 둔 종합적이고 다면적인 평가"로 인재를
        선발합니다.
      </DetailText>
      <DetailColorText>
        학생부 종합전형은 "생활기록부"를 통해 학생의 우수성을 평가합니다.
      </DetailColorText>
    </Container>
  );
}

export default SecondMind;
