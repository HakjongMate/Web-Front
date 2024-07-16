import React from 'react'
import styled from 'styled-components'
import GradationIntro from '../components/Curriculum/Section/GradationIntro'
import DetailSection from '../components/Curriculum/Section/DetailSection'
import WhiteOne from '../components/Curriculum/Others/WhiteOne'
import WhiteTwo from '../components/Curriculum/Others/WhiteTwo'
import WhiteThree from '../components/Curriculum/Others/WhiteThree'
import WhiteFour from '../components/Curriculum/Others/WhiteFour'
import WhiteFive from '../components/Curriculum/Others/WhiteFive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6F7FC;
`;

function CurriculumPage() {
  return (
    <Container>
      <GradationIntro />
      <DetailSection />
      <WhiteOne />
      <WhiteTwo />
      <WhiteThree />
      <WhiteFour />
      <WhiteFive />
    </Container>
  )
}

export default CurriculumPage