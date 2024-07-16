import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  background-color: #ffffff;
  margin-bottom: 30px;
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

function WhiteTwo() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>2</NumberCircle>
        <Title>"학생부 종합 전형"의 이해</Title>
      </TitleContainer>

      <HighlightedText>
        학종메이트의 "세특 필승 SUCCESS 공식"을 익히고
        <br />
        학생부 종합 전형에 대한 세부적인 강의를 진행합니다.
      </HighlightedText>

      <Content>
        현재 학생부 종합 전형은 많은 영역이 축소되며 내신과 세부능력
        특기사항(이하 세특)의 중요도가 매우 높아졌습니다.
      </Content>
      <Content>
        이러한 입시의 변화 속에서 학종 준비에 대한 '구체적인' 솔루션을
        제공합니다. <br />
        특히 세특의 위계를 학습하며 우수한 세특으로 생기부를 디자인할 수 있도록
        돕습니다.
      </Content>
    </Container>
  );
}

export default WhiteTwo;
