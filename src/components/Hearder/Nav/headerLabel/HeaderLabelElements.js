import { Link } from "react-router-dom";
import styled from "styled-components";
import { gradient } from "../../../stylesAbstracts";

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0px rgba(255, 255, 255, 0.2);
  padding: 15px;
  height: max-content;
  border-image-source: ${gradient};
  border-bottom-width: 2px;
  border-image-slice: 1;
`;
export const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const HeaderLogo = styled(Link)`
  /* height: 100%; */
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const Img = styled.img`
  display: inline-block;
  height: 100%;
  width: auto;
  object-fit: cover;
  margin-left: 15px;
  width: 50px;
  position: relative;
  top: -5px;
  padding-right: 10px;
  @media screen and (max-width: 992px) {
    height: auto;
  }
`;
export const Title = styled.p`
  display: block;
  font-size: 36px;
  font-weight: 400;
  color: transparent;
  height: 100%;
  margin: 0;
  -webkit-background-clip: text;
  background-image: ${gradient};
`;
export const HeaderSearch = styled.form`
  display: flex;
  /* height: 100%; */
  @media screen and (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const InputWrap = styled.div`
  background-image: ${gradient};

  height: 50px;
  border-radius: 50px;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;
export const Input = styled.input`
  outline: none;
  background-color: #fff;
  padding: 0px 15px;
  display: block;
  min-width: calc(100% - 4px);
  font-size: 16px;
  border: none;
  border-radius: 46px;
  height: 46px;
`;
export const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0 15px;
  background-image: linear-gradient(to top, #dc6bf9, #8e52fc);
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  height: 46px;
  font-size: 16px;
  color: #fff;
  position: relative;
  z-index: 2;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #dc6bf9, #8e52fc);

    filter: blur(25px);
    transform: translateY(40px) scale(0.9);
    transition: 0.3s;
    display: none;
    z-index: 1;
  }
  &:hover::before {
    display: block;
  }
  &:active {
    top: 2px;
  }
  @media screen and (max-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
    margin: 0;
  }
`;
