import styled, { keyframes } from "styled-components";

export const Wrap = styled.ul`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(0, -50%);
`;

const animate = keyframes`
   0%{
       transform: scale(1);
    }
    50%{
        transform: scale(2.5);
     }
    100%{
    transform: scale(1);
    }
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  margin: 0 20px;
  animation: ${animate} 1s infinite linear;
  ul li:nth-of-type(1) {
    background: #d35400;
    box-shadow: 0 0 20px #d35400;
    animation-delay: 0s;
  }
  ul li:nth-of-type(2) {
    background: #c0392b;
    box-shadow: 0 0 20px #c0392b;
    animation-delay: 0.1s;
  }
  ul li:nth-of-type(3) {
    background: #27ae60;
    box-shadow: 0 0 20px #27ae60;
    animation-delay: 0.2s;
  }
  ul li:nth-of-type(4) {
    background: #8e44ad;
    box-shadow: 0 0 20px #8e44ad;
    animation-delay: 0.3s;
  }
  ul li:nth-of-type(5) {
    background: #f1c40f;
    box-shadow: 0 0 20px #f1c40f;
    animation-delay: 0.4s;
  }
  ul li:nth-of-type(6) {
    background: #2980b9;
    box-shadow: 0 0 20px #2980b9;
    animation-delay: 0.5s;
  }
  ul li:nth-of-type(7) {
    background: #95a5a6;
    box-shadow: 0 0 20px #95a5a6;
    animation-delay: 0.6s;
  }
`;
