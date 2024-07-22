import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  width: 900px;

  @media (max-width: 1024px) {
    padding: 50px 25px;
    width: 80%;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    min-width: 700px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
    min-width: unset;
    width: 90%;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const TitleLine = styled.div`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
    padding-bottom: 8px;
    margin-bottom: 20px;
    white-space: pre-wrap;
    line-height: 1.5;
  }
`;

const HighlightedText = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #202594;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
  color: #000000;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const HighlightBoldText = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin-top: 7px;
  text-align: center;
  color: #202594;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    white-space: pre-wrap;
    font-size: 18px;
    margin-top: 5px;
  }
`;

const BoldText = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 8px;
  }
`;

const MobileText = styled(Text)`
  @media (max-width: 480px) {
    white-space: pre-wrap;
  }
`;

const EmphasizeIntro = () => {
  return (
    <Container>
      <Title>생활기록부는 내신에서 나타낼 수 없는</Title>
      <TitleLine>
        학생의 역량을 보여줄 수 있는{"\n"}단 하나의 평가요소입니다.
      </TitleLine>

      <MobileText>
        실제 통계를 확인해 봐도, 내신의 차이를 생활기록부를 통해{"\n"}
        뒤집는 사례들이 빈번히 발생하고 있죠.
        <br />
        특히 자신을 어필할 수 있었던 자기소개서가 사라짐에 따라
        <br />
        이제 학생이 정성적으로 자신의 역량을 드러낼 수 있는 부분은 {"\n"}
        오직 생활기록부밖에 없습니다.
      </MobileText>

      <HighlightedText>
        그만큼 '우수한 생활기록부'는 입시에 있어 엄청난 무기가 됩니다.
      </HighlightedText>
      <MobileText>
        하지만 많은 분들이 이 생활기록부의 위력을 과소평가하거나,
        <br />
        준비하는 법을 몰라서 방치하며 기회를 놓치고 있습니다.
      </MobileText>

      <MobileText>
        학종메이트의 수업은 '내가 학창시절로 돌아간다면 {"\n"}
        나에게 해주고 싶은 이야기'로 구성했습니다.
      </MobileText>

      <BoldText>아직 임시라는 큰 산을 넘어야 하는 여러분들께,</BoldText>
      <HighlightBoldText>
        학종메이트는 학생의 우수성을 {"\n"}
        최대한 드러낼 수 있는, <br />
        더 나아가 우수한 학생이 되는{"\n"}
        최적의 밑그림을 그려드립니다.
      </HighlightBoldText>
    </Container>
  );
};

export default EmphasizeIntro;
