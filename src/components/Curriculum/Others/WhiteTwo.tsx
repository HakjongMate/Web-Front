import React from "react";
import styled from "styled-components";
import SuccessImage from "../../../assets/icons/Curriculum/success.png";

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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const DetailImage = styled.img`
  width: 500px;
  height: 310px;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

function WhiteTwo() {
  return (
    <Container>
      <TitleContainer>
        <NumberCircle>2</NumberCircle>
        <Title>"학생부 종합 전형"의 이해</Title>
      </TitleContainer>

      <HighlightedText>
        학종메이트의  {"\n"}
        "세특 필승 SUCCESS 공식"을 익히고
        <br />
        학생부 종합 전형에 대한{"\n"}
        세부적인 강의를 진행합니다.
      </HighlightedText>

      <Content>
        현재 학생부 종합 전형은 많은 영역이 축소되며 <br />
        내신과 세부능력 특기사항(이하 세특)의 중요도가 {"\n"}
        매우 높아졌습니다.
      </Content>
      <Content>
        이러한 입시의 변화 속에서 학종 준비에 대한 {"\n"}
        '구체적인' 솔루션을 제공합니다. <br />
        특히 세특의 위계를 학습하며{"\n"}
        우수한 세특으로 생기부를 디자인할 수 있도록 돕습니다.
      </Content>

      <ImageContainer>
        <DetailImage src={SuccessImage} />
      </ImageContainer>
    </Container>
  );
}

export default WhiteTwo;
