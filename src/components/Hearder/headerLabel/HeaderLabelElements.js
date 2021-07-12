import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { gradient } from "../../../constants/stylesAbstracts";
const linear = keyframes`
    0%{background-position:left

    }
    100%{background-position:right}
  `;
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
  height: 100%;
  margin: 0;
  color: transparent;
  -webkit-background-clip: text;
  background-image: ${gradient};
  animation: ${linear} 10s infinite;
  background-size: 1000%;
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
  height: 50px;
  border-radius: 50px;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${gradient};
  animation: ${linear} 5s infinite;
  background-size: 400%;
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
  background-color: #333;
  color: #fff;
`;
export const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0 15px;
  background-color: #ff1493;
  background-image: linear-gradient(
    319deg,
    #ff1493 0%,
    #0000ff 37%,
    #ff8c00 100%
  );
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  height: 46px;
  font-size: 16px;
  color: #fff;
  position: relative;
  width: fit-content;
  z-index: 2;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 25%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      319deg,
      #ff1493 0%,
      #0000ff 37%,
      #ff8c00 100%
    );
    filter: blur(25px);
    transform: translateY(40px) scale(0.9);
    transition: 0.3s;
    display: none;
    z-index: -1;
  }
  &:hover::before {
    display: block;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
    padding: 0 4px;
  }
`;
