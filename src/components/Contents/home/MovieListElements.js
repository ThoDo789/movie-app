import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const MovieWrap = styled.div`
  padding: 10px;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  @media screen and (max-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 280px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    top: -3px;
    box-shadow: 12px 8px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
  display: block;
  transition: 0.3s;
  /* max-height: 280px; */
  height: 100%;
  object-fit: cover;
  &:hover {
    transform: scaleX(1.1);
  }
  @media screen and (max-width: 576px) {
    max-height: unset;
    height: 80%;
  }
`;
export const TitleFull = styled.span`
  background-color: #fff;
  color: #000;
  border: 1px solid;
  width: 100%;
  height: max-content;
  position: absolute;
  bottom: 0;
  border-radius: 3px;
  z-index: 10;
  transition: 0.3s;
  display: none;
  left: 0;
`;
export const Title = styled.span`
  color: #fff;
  text-align: center;

  overflow: hidden;
  padding: 20px 5px;
  min-height: 50px;
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0 15px;
  background-image: linear-gradient(to top, #dc6bf9, #8e52fc);
  border: none;
  border-radius: 5px;

  height: 46px;
  font-size: 16px;
  color: #fff;

  width: fit-content;
  margin-bottom: 10px;
`;
