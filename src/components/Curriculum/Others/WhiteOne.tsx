import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  background-color: #ffffff;
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
  font-family: "Pretendard-Bold";
  margin-right: 10px;
`;

const Title = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 22px;
  color: #0f4abe;
  border-bottom: 1px solid #202594;
  padding-bottom: 5px;
`;

const HighlightedText = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 18px;
  color: #0f4abe;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const Content = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const WhiteOne = () => {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>1</NumberCircle>
        <Title>입시 제도의 이해</Title>
      </TitleContainer>

      <HighlightedText>
        수시를 완벽하게 준비하기 위해서 현 입시제도와
        <br />각 입시제도별 중요 평가요소, 핵심 역량 등에 대해 철저히
        이해합니다.
      </HighlightedText>

      <Content>
        막막하게만 느껴졌던 입시 제도와 수시에 대해 학생이 100% 이해하고,
        <br />
        본인의 역량에 맞는 입시 전략을 선택할 수 있는 초석을 다집니다.
      </Content>
      <Content>
        2025학년도 전형별 비율, 입시제도 변경사항 및 바뀐 입시전형에서 취해야 할
        전략 등에 대해 강의합니다.
      </Content>
    </Container>
  );
};

export default WhiteOne;
