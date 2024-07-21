import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

interface MainReviewProps {
  id: number;
  rating: number;
  author: string;
  date: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f7fc;
  border-radius: 30px;
  padding: 40px 35px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const AuthorText = styled.div`
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DateText = styled.div`
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px; /* 마진 줄임 */
`;

const ContextText = styled.div`
  font-family: "Pretendard-Light";
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

function MainReview({ id, rating, author, date, content }: MainReviewProps) {
  return (
    <Container>
      <TextContainer>
        <AuthorText>{author}</AuthorText>
        <DateText>{date}</DateText>
      </TextContainer>
      <RatingContainer>
        {[1, 2, 3, 4, 5].map((star, index) => (
          <StarIcon key={index} style={{ color: index < rating ? "#202594" : "#BDBDBD", fontSize: "20px" }} /> 
        ))}
      </RatingContainer>
      <ContextText>{content}</ContextText>
    </Container>
  );
}

export default MainReview;
