import React from 'react';
import styled from 'styled-components';
import PageHeader from '../components/Apply/PageHeader';
import ApplyForm from '../components/Apply/ApplyForm';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background-color: #f6f7fc;
  font-family: 'Pretendard';
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  overflow-x: hidden; 

  @media (max-width: 768px) {
    padding: 25px 15px;
    min-height: calc(100vh - 120px);
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    min-height: calc(100vh - 250px);
  }
`;

const ApplyPage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <ApplyForm />
    </PageContainer>
  );
}

export default ApplyPage;
