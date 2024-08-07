import React from "react";
import styled from "styled-components";

const GradientContainer = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to bottom, #0f4abe, #002368);
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
  font-weight: 800;
  font-size: 30px;
  color: white;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    white-space: pre-wrap;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: white;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    white-space: pre-wrap;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const GradationIntro = () => {
  return (
    <GradientContainer>
      <GradientText>생활기록부의 핵심은 {"\n"} "유기적인 구성"입니다.</GradientText>
      <Subtitle>
        3개년을 미리 기획하고 학교생활을 하시는 것이 {"\n"}
        '압도적으로' 유리합니다.
      </Subtitle>
      <Subtitle>
        "생활기록부 디자인 완성 5주 커리큘럼" 및 {"\n"}"
        주기적인 생활기록부 관리 커리큘럼"으로 <br />
        생활기록부에 대해 완벽히 이해하고, 방향성을 설정합니다.
      </Subtitle>
    </GradientContainer>
  );
};

export default GradationIntro;
