import React, { useState } from "react";
import styled from "styled-components";
import toast, { Toaster } from 'react-hot-toast';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background-color: #f6f7fc;
  font-family: 'Pretendard';
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  overflow-x: hidden; 

  @media (max-width: 768px) {
    padding: 25px 15px;
    min-height: calc(100vh - 120px);
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    min-height: calc(100vh - 250px);
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
  padding: 5px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 16px;
  color: #202594;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  background-color: #f6f7fc;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-weight: 300;
  font-size: 14px;
  font-family: 'Pretendard';

  @media (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 8px 12px;
    font-size: 12px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: #f6f7fc;
  border-radius: 5px;
  font-weight: 300;
  font-size: 14px;
  font-family: 'Pretendard';
  min-height: 100px;
  resize: none;

  @media (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 8px 12px;
    font-size: 12px;
    min-height: 80px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 15px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3730a3;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: #2b2583;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #202594;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneRegex = /^(?:\d{3}-\d{4}-\d{4}|\d{11})$/;

    if (!formData.name) {
      alert("성함을 입력해주세요.");
      return;
    }
    if (!formData.phone) {
      alert("연락처를 입력해주세요.");
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("올바른 연락처를 입력해주세요. 입력 양식: 000-0000-0000 또는 00000000000");
      return;
    }
    if (!formData.content) {
      alert("상담내용을 입력해주세요.");
      return;
    }
    if (!isAgreed) {
      alert("개인정보 수집 내용에 동의해주세요.");
      return;
    }

    toast.success("신청이 완료되었습니다.", {
      style: {
        maxWidth: "1000px",
        width: "300px",
        fontSize: "20px",
      },
    });

    setFormData({ name: "", phone: "", content: "" });
    setIsAgreed(false);
  };

  return (
    <PageContainer>
      <Title>수업 및 상담 신청</Title>
      <Subtitle>
        상담 신청을 남겨주시면,
        <br />
        순차적으로 카카오톡 메시지가 전달됩니다.
      </Subtitle>
      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <Label>성함</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="고객님의 성함을 적어주세요."
          />
        </InputGroup>
        <InputGroup>
          <Label>연락처</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="고객님의 연락처를 적어주세요."
          />
        </InputGroup>
        <InputGroup>
          <Label>상담내용</Label>
          <TextArea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="원하시는 상담의 내용을 입력해주세요"
          />
        </InputGroup>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
            id="agreeCheckbox"
          />
          <CheckboxLabel htmlFor="agreeCheckbox">개인정보 수집 내용에 동의합니다.</CheckboxLabel>
        </CheckboxContainer>
        <ButtonWrapper>
          <SubmitButton type="submit">상담 신청하기</SubmitButton>
        </ButtonWrapper>
      </FormContainer>
      <Toaster />
    </PageContainer>
  );
}

export default ApplyPage;
