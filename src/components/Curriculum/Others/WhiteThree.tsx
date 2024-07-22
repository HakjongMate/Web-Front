import React from "react";
import styled from "styled-components";

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
  }

  @media (max-width: 375px) {
    font-size: 14px;
    white-space: pre-wrap;
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

function WhiteThree() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>3</NumberCircle>
        <Title>"생활기록부" 톺아보기</Title>
      </TitleContainer>

      <HighlightedText>
        출결상황부터 행동특성 및 종합의견까지 <br />
        생활기록부의 시작부터 끝까지 {"\n"}
        꼼꼼하게 분석합니다.
      </HighlightedText>

      <Content>
        생활기록부는 학생부 종합전형에서 {"\n"}
        가장 중요한 자료입니다.
      </Content>
      <Content>
        학생들이 사소하게 놓치고 지나가는 부분부터 <br />
        생활기록부의 꽃인 세특까지 우수 사례를 기반으로 {"\n"}
        생활기록부를 톺아봅니다.
      </Content>
    </Container>
  );
}

export default WhiteThree;
