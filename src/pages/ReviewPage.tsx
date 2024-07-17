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
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  margin-bottom: 100px;
`;

const ReviewPage = () => {
  const reviews: Review[] = ReviewJson;

  return (
    <Container>
      <GradationIntro />
      <Text>실제 컨설팅을 진행한 후 작성해주신 소중한 후기들입니다.</Text>
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
