import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainReview from "../../MainReview";
import ReviewJson from "../../../assets/data/review.json";
import CommonButton from "../../CommonButton";

const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  max-width: 1080px;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }
`;

const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

const IntroText = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 7px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const IntroBolderText = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 7px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const BoldText = styled.div`
  font-weight: 700;
  align-self: center;
  font-size: 24px;
  color: #202594;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ReviewContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%;
  }
`;

const Review: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const reviews = ReviewJson.filter(review => review.id <= 3);

  // 모바일 화면일 경우 3초마다 다음 리뷰로 이동
  // 모바일 화면이 아닐 경우 자동으로 넘어가지 않음
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // 3초마다 다음 리뷰로 이동
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length);
      }, 3000); 
      
      // 컴포넌트 언마운트 시 인터벌 정리
      return () => clearInterval(interval); 
    }
  }, [isMobile, reviews.length]);

  const navigate = useNavigate();

  const handleMoreReviewsClick = () => {
    navigate("/review");
  };

  return (
    <WhiteContainer>
      <Container>
        <IntroTextContainer>
          <IntroText>한 번뿐인 입시,</IntroText>
          <IntroBolderText>아무에게나 맡길 순 없습니다.</IntroBolderText>
        </IntroTextContainer>

        <DetailContainer>
          <DetailText>
            학종메이트만의 "학생부 종합전형 마인드셋 3가지"와
          </DetailText>
          <DetailText>
            자체 연구﹒개발한 "세특 필승 공식 7가지"로 지도합니다.
          </DetailText>
        </DetailContainer>

        <BoldText>
          학종의 본질을 파악하고 개인에 맞는 솔루션을 제공합니다.
        </BoldText>

        <ReviewContainer isMobile={isMobile}>
          {isMobile ? (
            <MainReview
              id={reviews[currentReviewIndex].id}
              rating={reviews[currentReviewIndex].rating}
              author={reviews[currentReviewIndex].author}
              date={reviews[currentReviewIndex].date}
              content={reviews[currentReviewIndex].content}
            />
          ) : (
            reviews.map((review) => (
              <MainReview
                key={review.id}
                id={review.id}
                rating={review.rating}
                author={review.author}
                date={review.date}
                content={review.content}
              />
            ))
          )}
        </ReviewContainer>

        <ButtonContainer>
          <CommonButton
            to="/review"
            onClick={handleMoreReviewsClick}
            text="더 많은 후기 >"
            children={null}
          />
        </ButtonContainer>
      </Container>
    </WhiteContainer>
  );
};

export default Review;
