import React from "react";
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
  width: 1080px;
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
`;

const IntroBolderText = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 7px;
  border-bottom: 1px solid #202594;
  padding-bottom: 10px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const DetailText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
`;

const BoldText = styled.div`
  font-weight: 700;
  align-self: center;
  font-size: 24px;
  color: #202594;
  margin-bottom: 30px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 1080px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

function Review() {
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

        <ReviewContainer>
          {ReviewJson.map((review) => {
            if (review.id <= 3) {
              return (
                <MainReview
                  key={review.id}
                  id={review.id}
                  rating={review.rating}
                  author={review.author}
                  date={review.date}
                  content={review.content}
                />
              );
            }
          })}
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
}

export default Review;
