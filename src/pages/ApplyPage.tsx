import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #F6F7FC;
`;

const Title = styled.h1`
  font-family: "Pretendard-Bold";
  font-size: 24px;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
  padding: 5px;
`;

const Subtitle = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  color: #202594;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #F6F7FC;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: "Pretendard-Light";
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #F6F7FC;
  border-radius: 5px;
  font-family: "Pretendard-Light";
  font-size: 14px;
  resize: vertical;
  min-height: 100px;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3730a3;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: "Pretendard-Bold";
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2b2583;
  }
`;

function ApplyPage() {
  return (
    <PageContainer>
      <Title>수업 및 상담 신청</Title>
      <Subtitle>
        상담 신청을 남겨주시면,<br />
        순차적으로 카카오톡 메시지가 전달됩니다.
      </Subtitle>
      <FormContainer>
        <InputGroup>
          <Label>성함</Label>
          <Input type="text" placeholder="고객님의 성함을 적어주세요." />
        </InputGroup>
        <InputGroup>
          <Label>연락처</Label>
          <Input type="tel" placeholder="고객님의 연락처를 적어주세요." />
        </InputGroup>
        <InputGroup>
          <Label>상담내용</Label>
          <TextArea placeholder="원하시는 상담의 내용을 입력해주세요" />
        </InputGroup>
        <SubmitButton type="submit">상담 신청하기</SubmitButton>
      </FormContainer>
    </PageContainer>
  );
}

export default ApplyPage;