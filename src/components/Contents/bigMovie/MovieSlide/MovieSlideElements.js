import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieSlideWrap = styled.div`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 10px;
  border-radius: 5px;
`;
export const MovieList = styled.div`
  position: relative;
  width: 100%;

  height: 50vh;
  background-color: #ccc;
  @media screen and (min-width: 1200px) {
    height: 80vh;
  }
`;
export const MovieImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`;
export const MovieItem = styled(Link)`
  height: 100%;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.4s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
export const MovieTitle = styled.h3`
  color: #fff;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  font-size: 40px;
  bottom: 80px;
  left: 10px;
  z-index: 2;
  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`;

export const BtnSlide = styled.div`
  position: absolute;
  bottom:  0;
  right: 0;

  z-index: 15;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2d2d2d;
  width: max-content;
  padding: 15px;
  border-radius: 50px 0 0 50px ;
`;
const actionSlide = `
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: none;
  position:relative;
  margin-left: 10px;
  font-size:20px;
  transiton: .3s;
  background-color: rgba(255, 255, 255, 0.3);

  &:hover{
    font-size: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  

  }
 
`;
export const NextSlide = styled.button`
  ${actionSlide}
  border-radius: 50% 50% 50% 0;

  &:hover {
    box-shadow: -10px 6px 20px rgba(0, 0, 0, 0.8);
  }
  &:active {
    right: -3px;
  }
`;
export const PrevSlide = styled.button`
    border-radius: 50%  0 50% 50% ;

  ${actionSlide} &:hover {
    box-shadow: 10px 6px 20px rgba(0, 0, 0, 0.8);
  }
  &:active {
    left: -3px;
  }
`;
