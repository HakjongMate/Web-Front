import React from 'react'
import styled from 'styled-components';

import MainIntro from '../components/Home/Section/MainIntro';
import Review from '../components/Home/Section/Review';
import Mindset from '../components/Home/Section/Mindset';
import SelectionProcess from '../components/Home/Section/SelectionProcess';
import CurriculumIntro from '../components/Home/Section/CurriculumIntro';
import SemiFooter from '../components/SemiFooter';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6F7FC;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <MainIntro />
      <Review />
      <Mindset />
      <SelectionProcess />
      <CurriculumIntro />
      <SemiFooter />
    </HomePageContainer>
  )
}

export default HomePage