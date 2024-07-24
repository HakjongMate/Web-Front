import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
  padding: 5px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubtitleWrapper = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const PageHeader: React.FC = () => {
  return (
    <>
      <TitleWrapper>수업 및 상담 신청</TitleWrapper>
      <SubtitleWrapper>
        상담 신청을 남겨주시면,
        <br />
        순차적으로 카카오톡 메시지가 전달됩니다.
      </SubtitleWrapper>
    </>
  );
}

export default PageHeader;
