import React from 'react'
import styled from 'styled-components'
import GradationIntro from '../components/Introduce/Section/GradationIntro'
import DetailIntro from '../components/Introduce/Section/DetailIntro'
import EmphasizeIntro from '../components/Introduce/Section/EmphasizeIntro'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6F7FC;
  padding-bottom: 50px;
`;

function IntroducePage() {
  return (
    <HomePageContainer>
      <GradationIntro />
      <DetailIntro />
      {/* <EmphasizeIntro /> */}
    </HomePageContainer>
  )
}

export default IntroducePage