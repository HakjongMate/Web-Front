import React from "react";
import styled from "styled-components";
import GradationIntro from "../components/Review/GradationIntro";
import ReviewComponent from "../components/Review/ReviewComponent";
import ReviewJson from "../assets/data/review.json";
import SemiFooter from "../components/SemiFooter";

interface Review {
  id: number;
  rating: number;
  author: string;
  date: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f7fc;
  overflow-x: hidden; 
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 15px;
    white-space: pre-line;
    line-height: 1.5;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 0 15px;
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    margin-bottom: 50px;
  }
`;

const ReviewPage = () => {
  const reviews: Review[] = ReviewJson;

  return (
    <Container>
      <GradationIntro />
      <Text>실제 컨설팅을 진행한 후 {"\n"}작성해주신 소중한 후기들입니다.</Text>
      <ReviewContainer>
        {reviews.map((review) => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </ReviewContainer>
      <SemiFooter />
    </Container>
  );
};

export default ReviewPage;
