import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CommonButtonProps {
  to: string;
  onClick?: () => void;
  text: string
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: #0f4abe;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-family: 'Pretendard-Bold';
  padding: 10px 20px;
  height: 50px;
  width: 150px;
  &:hover {
    background-color: #0d3a9e;
  }
`;

const Text = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 16px;
  color: white;
`;

const CommonButton = ({ to, onClick, text, children }: CommonButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(to);
  };

  return (
    <StyledButton onClick={handleClick}>
      <Text>{text}</Text>
    </StyledButton>
  );
};

export default CommonButton;
