import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
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
  font-family: "Pretendard";

  @media (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 8px 12px;
    font-size: 12px;
  }
`;

const TextAreaWrapper = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
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
  font-family: "Pretendard";
  min-height: 100px;
  resize: none;

  @media (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 8px 12px;
    font-size: 12px;
    min-height: 80px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
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
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 12px;
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

const Button = styled.button`
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

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

type TextAreaFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <TextAreaWrapper>
      <Label>{label}</Label>
      <TextArea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </TextAreaWrapper>
  );
};

type CheckboxFieldProps = {
  isChecked: boolean;
  onChange: () => void;
};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  isChecked,
  onChange,
}) => {
  return (
    <CheckboxContainer onClick={onChange}>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id="agreeCheckbox"
      />
      <CheckboxLabel htmlFor="agreeCheckbox">
        본인은 개인정보 보호법 제15조에 의거하여
        본인의 개인정보를 제공할 것을 동의합니다.
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export const SubmitButton: React.FC = () => {
  return (
    <ButtonWrapper>
      <Button type="submit">상담 신청하기</Button>
    </ButtonWrapper>
  );
};
