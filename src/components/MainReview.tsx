import React from 'react'
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
  justify-content: center;
  width: 100%;
  min-height: 250px;
  margin: 20px;
  padding: 20px 35px;
  background-color: #f6f7FC;
  border-radius: 30px;
  padding: 20px 35px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AuthorText = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 20px;
`;

const DateText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const ContextText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 16px;
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
          <StarIcon key={index} style={{ color: index < rating ? "#202594" : "#BDBDBD" }} />
        ))}
      </RatingContainer>
      <ContextText>{content}</ContextText>
    </Container>
  )
}

export default MainReview