import React from "react";
import styled from "styled-components";
import MainSearch from "../../../assets/icons/main-search.png";

const MainIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  padding: 15px 0;

  @media (max-width: 1024px) {
    flex-direction: row;
    padding: 10px;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  @media (max-width: 1024px) {
    max-width: 50%;
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    align-items: center;
  }
`;

const MainText = styled.div`
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const MainColorText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #202594;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 4px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 3px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 10px;
  }
`;

const DetailText = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DetailColorText = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #202594;
  margin: 0 7px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 5px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 2px;
  }
`;

const MainImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

function MainIntro() {
  return (
    <MainIntroContainer>
      <TextContainer>
        <MainTextContainer>
          <MainColorText>학종메이트</MainColorText>
          <MainText>, 생활기록부의 새로운 기준</MainText>
        </MainTextContainer>

        <DetailContainer>
          <DetailText>결국 대학에 가려면</DetailText>
          <DetailColorText>'우수한 학생'</DetailColorText>
          <DetailText>이 되어야 합니다.</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailText>학종메이트는 학종에</DetailText>
          <DetailColorText>'왕도는 없다'</DetailColorText>
          <DetailText>고 생각합니다.</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailText>우수한 학생이 되기 위한</DetailText>
          <DetailColorText>'올바른 방향'</DetailColorText>
          <DetailText>을 제시합니다.</DetailText>
        </DetailContainer>
      </TextContainer>

      <MainImage src={MainSearch} alt="main-search" />
    </MainIntroContainer>
  );
}

export default MainIntro;
