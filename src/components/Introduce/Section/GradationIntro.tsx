import React from 'react';
import styled from 'styled-components';

const GradientContainer = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to bottom, #0F4ABE, #002368);
  padding: 50px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

const GradientText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: white;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
    white-space: pre-wrap;
  }
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: white;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const GradationIntro = () => {
  return (
    <GradientContainer>
      <GradientText>
        학종메이트는<br />
        학종의 본질을 파악하고{"\n"}개인에 맞는 솔루션을 제공합니다.
      </GradientText>
      <Subtitle>
        학종메이트만의 "학생부 종합전형 마인드셋 3가지"와<br />
        자체 연구 · 개발한 "세특 필승 SUCCESS 공식"로 지도합니다.
      </Subtitle>
    </GradientContainer>
  );
};

export default GradationIntro;
