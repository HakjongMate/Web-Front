import React from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const IntroBolderText = styled.div`
  font-weight: 700;
  font-size: 28px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 8px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    padding-bottom: 6px;
    margin-bottom: 10px;
  }

  @media (max-width: 320px) {
    white-space: pre-wrap;
    text-align: center;
  }
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const MobileDetailText = styled(DetailText)`
  @media (max-width: 480px) {
    display: block;
    white-space: pre-wrap;
  }
`;

function DetailSection() {
  return (
    <DetailContainer>
      <IntroBolderText>
        "학종메이트"만의 {"\n"}차별화된 커리큘럼을 소개합니다.
      </IntroBolderText>

      <MobileDetailText>대학은 '우수한 학생'을 원합니다.</MobileDetailText>

      <MobileDetailText>
        생활기록부는 우수성을 드러내기 위한 '캔버스'입니다.
      </MobileDetailText>

      <MobileDetailText>
        학생의 우수성을 최대한 드러낼 수 있는, {"\n"}
        더 나아가 우수한 학생이 되는, {"\n"}
        최적의 밑그림을 그려드립니다.
      </MobileDetailText>
    </DetailContainer>
  );
}

export default DetailSection;
