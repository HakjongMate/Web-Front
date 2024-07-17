import React from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const IntroBolderText = styled.div`
  font-weight: 700;
  font-size: 28px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
`;

function DetailSection() {
  return (
    <DetailContainer>
      <IntroBolderText>"학종메이트"만의 차별화된 커리큘럼을 소개합니다.</IntroBolderText>

      <DetailText>대학은 '우수한 학생'을 원합니다.</DetailText>

      <DetailText>
        생활기록부는 우수성을 드러내기 위한 '캔버스'입니다.
      </DetailText>

      <DetailText>
        학생의 우수성을 최대한 드러낼 수 있는, <br />더 나아가 우수한 학생이
        되는 최적의 밑그림을 그려드립니다.
      </DetailText>
    </DetailContainer>
  );
}

export default DetailSection;
