import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: calc((100% - 1100px) / 2 - 50px); 
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0f4abe;
  border: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: #0d3a9e;
  }
`;

function FloatingButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/apply');
  };

  return (
    <Button onClick={handleClick}>
      수업 신청
    </Button>
  );
}

export default FloatingButton;
