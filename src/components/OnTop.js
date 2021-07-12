import React from "react";
import styled from "styled-components";
import { gradientText } from "../constants/stylesAbstracts";
import { FiArrowUpLeft } from "react-icons/fi";
const TopBlock = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  background: #6c6c6c;
  border-radius: 50% 50% 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  font-size: 16px;
  transform: rotate(45deg);

  &:hover {
    background-color: #fff;
    font-size: 20px;
  }
  &:active {
    bottom: 15px;
  }
`;
const IconArrow = styled(FiArrowUpLeft)`
  color: #333;
`;
const OnTop = () => {
  return (
    <TopBlock
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <IconArrow />
    </TopBlock>
  );
};

export default OnTop;
