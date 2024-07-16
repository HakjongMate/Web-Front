import React from 'react'
import styled from 'styled-components';

interface MainReviewProps {
  id: number;
  rating: number;
  author: string;
  date: string;
  content: string;
}

function MainReview({ id, rating, author, date, content }: MainReviewProps) {
  return (
    <div>MainReview</div>
  )
}

export default MainReview