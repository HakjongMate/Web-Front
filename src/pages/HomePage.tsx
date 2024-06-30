import React from 'react'
import styled from 'styled-components';

import MainIntro from '../components/Section/Home/MainIntro';
import Review from '../components/Section/Home/Review';
import Mindset from '../components/Section/Home/Mindset';
import SelectionProcess from '../components/Section/Home/SelectionProcess';
import CurriculumIntro from '../components/Section/Home/CurriculumIntro';
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