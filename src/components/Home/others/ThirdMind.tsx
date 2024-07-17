import React from "react";
import styled from "styled-components";
import MindImageOne from "../../../assets/icons/Home/mind_three.png";
import MindImageTwo from "../../../assets/icons/Home/mind_treee.png";

const Container = styled.div`
  display: flex;
  width: 1080px;
  border-radius: 20px;
  flex-direction: column;
  margin: 30px 50px;
  padding: 30px 50px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
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
  font-weight: 700;
  margin-right: 10px;
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 7px;
  border-bottom: 1px solid #000;
`;

const TitleColorText = styled.div`
  color: #0f4abe;
  font-weight: 700;
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
  width: 400px;
  height: 230px;
  margin: 0 10px;
`;

const Space = styled.div`
  margin-bottom: 30px;
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
`;

const DetailColorText = styled.div`
  color: #0f4abe;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

function ThirdMind() {
  return (
    <Container>
      <TitleContainer>
        <NumberIcon>3</NumberIcon>
        <TitleText>생활기록부의 목표는 {"["}</TitleText>
        <TitleColorText>내신에서 드러나지 않는</TitleColorText>
        <TitleText>{"]"} 학생의 우수성을 보이기 위한 지표입니다.</TitleText>
      </TitleContainer>

      <ImageContainer>
        <MindsetImage src={MindImageOne} />
        <MindsetImage src={MindImageTwo} />
      </ImageContainer>

      <DetailText>
        위는 2023학년도 고려대학교 교과전형과 종합전형의 내신 비교입니다.
      </DetailText>
      <DetailText>1등급만 붙을 수 있는 학교추천전형과 다르게</DetailText>
      <DetailText>
        2등급이어도, 심지어는 3등급이어도 "학생부종합전형"으로는 고려대에 붙은 경우가 있습니다.
      </DetailText>

      <Space />
      
      <DetailColorText>
        종합적인 "생활기록부" 평가 방식을 통하여,
      </DetailColorText>
      <DetailColorText>
        단순히 점수를 합산하는 방식으로 평가하지 못했던
      </DetailColorText>
      <DetailColorText>
        학생들의 학업능력과 잠재력을 평가하여 "우수한 학생"을 선발한다는 것입니다.
      </DetailColorText>
    </Container>
  );
}

export default ThirdMind;
