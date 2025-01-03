import React from "react";
import styled from "styled-components";
import BadImage from "../../../assets/icons/Introduce/bad.png";
import GoodImage from "../../../assets/icons/Introduce/good.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const TitleLine = styled.div`
  font-weight: 700;
  font-size: 28px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    font-size: 20px;
    padding-bottom: 6px;
    margin-bottom: 15px;
    white-space: pre-wrap;
    text-align: center;
    line-height: 1.5;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const HighlightedText = styled(Text)`
  color: #202594;
  font-weight: 700;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BoldText = styled(Text)`
  font-weight: 700;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SemiHighlightedText = styled(Text)`
  color: #0f4abe;
  font-weight: 700;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 480px) {
    margin-top: 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const MobileText = styled(Text)`
  @media (max-width: 480px) {
    white-space: pre-wrap;
  }
`;

const MobileHighlightedText = styled(HighlightedText)`
  @media (max-width: 480px) {
    white-space: pre-wrap;
  }
`;

const MobileBoldText = styled(BoldText)`
  @media (max-width: 480px) {
    white-space: pre-wrap;
  }
`;

const MobileSemiHighlightedText = styled(SemiHighlightedText)`
  @media (max-width: 480px) {
    white-space: pre-wrap;
  }
`;

function DetailIntro() {
  return (
    <Container>
      <Title>생활기록부,</Title>
      <TitleLine>내가 챙기지 않는다면{"\n"}아무도 챙기지 않습니다.</TitleLine>
      <MobileText>
        휘문고 학급 평균 34명, <br /> 교과 담당 기준 최소 100명 이상. <br />
        교사가 너무 많은 학생의 세특을 담당합니다.
      </MobileText>
      <MobileText>
        스스로 챙기지 못한다면 <br />
        아래와 같은 단순한 활동 나열식의,
        <br /> 질 낮은 생기부가 완성됩니다.
      </MobileText>
      <ImageContainer>
        <Image src={BadImage} alt="Bad Example" />
        <MobileText>학교 선생님은 현실적으로 '모든 학생'을 챙겨줄 수 없습니다.</MobileText>
        <MobileText>
          단순 나열식의 생활기록부는
          <br /> 대학 평가 요소를 절대 충족할 수 없습니다.
        </MobileText>
        <MobileHighlightedText>
          열심히 한 활동들을 철저히 기록하고, <br />
          공유해야 좋은 생활기록부가 만들어집니다.
        </MobileHighlightedText>
        <Image src={GoodImage} alt="Good Example" />
      </ImageContainer>
      <MobileBoldText>
        학생부 종합전형으로 대학에 가기 위해서는 <br />
        착각에서 벗어나 대학에 맞는{"\n"}우수한 학생임을 증명해야합니다.
      </MobileBoldText>
      <MobileSemiHighlightedText>
        학종 메이트는 "우수한 학생"을 위한{"\n"}올바른 방향을 제시합니다.
      </MobileSemiHighlightedText>
    </Container>
  );
}

export default DetailIntro;
