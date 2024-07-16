import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1080px;
  margin-top: 20px;
  padding-bottom: 50px;
`;

const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IntroBolderText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid #202594;
  padding-bottom: 10px;
  text-align: center;
`;

const IntroText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  margin-bottom: 7px;
  color: #202594;
`;

const DetailText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  margin-bottom: 5px;
  text-align: center;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1080px;
  margin-top: 40px;
`;

const StepBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 245px;
`;

const StepNumber = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 80px;
  margin-bottom: 10px;
  ${(props) => props.color && `color: ${props.color};`}
`;

const StepTitle = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const StepDescription = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
`;

function SelectionProcess() {
  return (
    <Container>
      <IntroTextContainer>
        <IntroBolderText>철저한 검증으로 선발된 전문가</IntroBolderText>
        <IntroText>
          학생부종합전형으로 SKY에 합격한
        </IntroText>
        <IntroText>
          인문, 사회, 자연, 공학 계열 선생님들
        </IntroText>
      </IntroTextContainer>
      <DetailText>
        최신 입시 트렌드를 섭렵한
      </DetailText>
      <DetailText>
        철저한 검증으로 선발된 인원들로 수업을 진행합니다
      </DetailText>
      <StepContainer>
        <StepBox>
          <StepNumber color="#006DE2">1</StepNumber>
          <StepTitle>지원서 검토</StepTitle>
          <StepDescription>
            재학증명서, 과외 경험,
            <br />
            면접 경험 등을 파악하여
            <br />
            학생부 컨설팅에 적합한
            <br />
            선생님인지 검증합니다
          </StepDescription>
        </StepBox>
        <StepBox>
          <StepNumber color="#3B6BC7">2</StepNumber>
          <StepTitle>1차 면접</StepTitle>
          <StepDescription>
            선생님들의 전문성을 위해
            <br />
            변화된 입시 트렌드,
            <br />
            자신의 계열에 대한 이해도
            <br />
            등을 평가합니다.
          </StepDescription>
        </StepBox>
        <StepBox>
          <StepNumber color="#0F4ABE">3</StepNumber>
          <StepTitle>2차 면접</StepTitle>
          <StepDescription>
            시범 강의, 생기부 분석 테스트,
            <br />
            학종메이트 교육 과정 
            <br />
            이해도 테스트 등
            <br />
            선생님들의 수업을 평가합니다.
          </StepDescription>
        </StepBox>
        <StepBox>
          <StepNumber color="#202594">4</StepNumber>
          <StepTitle>지속적인 평가</StepTitle>
          <StepDescription>
            주기적인 세미나 활동,
            <br />
            학생ㆍ학부모 피드백을 통해
            <br />
            자체 기준을 통과한 선생님들만
            <br />
            활동을 계속 이어갑니다.
          </StepDescription>
        </StepBox>
      </StepContainer>
    </Container>
  );
}

export default SelectionProcess;
