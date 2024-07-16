import React from "react";
import styled from "styled-components";
import MainSearch from "../../../assets/icons/main-search.png";

const MainIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1080px;
  padding: 15px 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

const MainText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 30px;
`;

const MainColorText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  color: #202594;
  margin-left: 7px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailText = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 22px;
  margin-bottom: 15px;
`;

const DetailColorText = styled.div`
  font-family: "Pretendard-SemiBold";
  font-size: 22px;
  color: #202594;
  margin-left: 7px;
  margin-right: 7px;
`;

const MainImage = styled.img`
  width: 300px;
  height: 300px;
`;

function MainIntro() {
  return (
    <MainIntroContainer>
      <TextContainer>
        <MainTextContainer>
          <MainText>학종메이트에는</MainText>
          <MainColorText>꼼수, 편법</MainColorText>
          <MainText>이 없습니다.</MainText>
        </MainTextContainer>

        <DetailContainer>
          <DetailText>결국 대학에 맞는</DetailText>
          <DetailColorText>"우수한 학생"</DetailColorText>
          <DetailText>이 되어야 합니다.</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailText>학종메이트는 우수한 학생을 위한</DetailText>
          <DetailColorText>올바른 방향</DetailColorText>
          <DetailText>을 제시합니다.</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailText>학종메이트는 학종에</DetailText>
          <DetailColorText>"왕도는 없다"</DetailColorText>
          <DetailText>라고 생각합니다.</DetailText>
        </DetailContainer>
      </TextContainer>

      <MainImage src={MainSearch} alt="main-search" />

    </MainIntroContainer>
  );
}

export default MainIntro;
