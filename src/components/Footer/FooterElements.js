import styled from "styled-components";
import { gradient, gradientText } from "../../constants/stylesAbstracts";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
export const FooterWrapper = styled.footer`
  width: 100%;

  border-image-source: ${gradient};
  border-top-width: 2px;
  border-image-slice: 1;
  padding: 30px 0;
  flex-wrap: wrap;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Social = styled.div`
  display: flex;
  flex: 0 0 50%;
  max-width: 50%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const BtnIcon = styled.a`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 3px;
  margin: 0 15px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: #8e52fc;
    background: #fff;
    border-color: #8e52fc;
  }
`;
export const LogoWrap = styled(Link)`
  text-decoration: none;
  flex: 0 0 25%;
  max-width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const LogoFooter = styled.img`
  object-fit: cover;
  height: 200px;
  width: auto;
`;
export const InfoAuthor = styled.div`
  display: flex;
  flex: 0 0 25%;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 15px;
  }
`;
export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
export const LocationIcon = styled(MdLocationOn)`
  font-size: 30px;
  color: #fff;
  margin-right: 15px;
`;

export const PhoneIcon = styled(AiFillPhone)`
  font-size: 30px;
  color: #fff;
  margin-right: 15px;
  cursor: pointer;
`;
export const LocationText = styled.span`
  display: block;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #8e52fc;
  }
`;
export const EndPage = styled.p`
  margin-top: 15px;
  flex: 0 0 100%;
  max-width: 100%;
  font-size: 14px;
  text-align: center;
  color: #fff;
`;
