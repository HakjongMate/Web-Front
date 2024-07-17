import React from 'react';
import styled from 'styled-components';

const GradientContainer = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to bottom, #0F4ABE, #002368);
  padding: 50px 0;
  text-align: center;
`;

const GradientText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: white;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: white;
  line-height: 1.5;
`;

const GradationIntro = () => {
  return (
    <GradientContainer>
      <GradientText>
        학종메이트는<br />
        학종의 본질을 파악하고 개인에 맞는 솔루션을 제공합니다.
      </GradientText>
      <Subtitle>
        학종메이트만의 "학생부 종합전형 마인드셋 3가지"와<br />
        자체 연구 · 개발한 "새특 필승 SUCCESS 공식"로 지도합니다.
      </Subtitle>
    </GradientContainer>
  );
};

export default GradationIntro;