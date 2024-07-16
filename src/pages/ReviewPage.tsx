import React from 'react'
import styled from 'styled-components'
import GradationIntro from '../components/Review/GradationIntro'
import ReviewComponent from '../components/Review/ReviewComponent'
import ReviewJson from '../assets/data/review.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6F7FC;
`;

const Text = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 30px;
`;


function ReviewPage() {
  return (
    <Container>
      <GradationIntro />
      <Text>실제 컨설팅을 진행한 후 작성해주신 소중한 후기들입니다.</Text>
      <ReviewComponent />
    </Container>
  )
}

export default ReviewPage