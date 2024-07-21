import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CommonButtonProps {
  to: string;
  onClick?: () => void;
  text: string;
  children?: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: #0f4abe;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 20px;
  height: 50px;
  min-width: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d3a9e;
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    height: 45px;
    min-width: 130px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    height: 40px;
    min-width: 120px;
    font-size: 13px;
  }
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CommonButton: React.FC<CommonButtonProps> = ({ to, onClick, text, children }) => {
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
      {children}
    </StyledButton>
  );
};

export default CommonButton;
