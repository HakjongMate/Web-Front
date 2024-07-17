import React from "react";
import styled from "styled-components";

interface Review {
  id: number;
  rating: number;
  author: string;
  date: string;
  content: string;
}

interface ReviewComponentProps {
  review: Review;
}

const ReviewContainer = styled.div`
  display: flex;
  justify-content: row;
  max-width: 100%;
  background-color: white;
  padding: 20px;
  margin: 15px 100px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 230px;
`;

const Author = styled.div`
  font-size: 12px;
  font-weight: 300;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 300;
`;

const Rating = styled.div`
  color: #202594;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

const ReviewComponent: React.FC<ReviewComponentProps> = ({ review }) => {
  return (
    <ReviewContainer>
      <LeftContainer>
        <Rating>{"★ ".repeat(review.rating)}</Rating>
        <Content>{review.content}</Content>
      </LeftContainer>
      <RightContainer>
        <Date>{review.date}</Date>
        <Author> {review.author}</Author>
      </RightContainer>
    </ReviewContainer>
  );
};

export default ReviewComponent;
