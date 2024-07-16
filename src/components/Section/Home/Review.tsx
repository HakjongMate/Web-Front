import React from "react";
import styled from "styled-components";
import MainReview from "../../MainReview";
import ReviewJson from "../../../assets/data/review.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  padding: 50px 0;
`;

const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #202594;
`;

const IntroText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-bottom: 7px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const DetailText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  margin-bottom: 5px;
`;

const BoldText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  color: #202594;
  margin-bottom: 30px;
`;

function Review() {
  return (
    <Container>
      <IntroTextContainer>
        <IntroText>한 번뿐인 입시,</IntroText>
        <IntroText>아무에게나 맡길 순 없습니다.</IntroText>
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

      {ReviewJson.map((review, index) => (
        <MainReview
          key={index}
          id={index}
          author={review.author}
          rating={review.rating}
          content={review.content}
          date={review.date}
        />
      ))}
    </Container>
  );
}

export default Review;
