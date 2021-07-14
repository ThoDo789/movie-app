import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiCaretDown } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { gradient, gradientText } from "../../../constants/stylesAbstracts";
export const NavBar = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 10px 0;
  @media screen and (max-width: 992px){
  padding: 15px;
  justify-content: flex-end;
  margin: 0;
      height: 46px;
  }
  
`;
export const NavIcon = styled.div`
  display: none;


  @media screen and (max-width: 576px) {
     display: flex;
    justify-content: center;
    align-items: center;;
  }
`;
export const NavBarIcon = styled(FaBars)`
  font-size: 20px;
  color: #fff;

`;
export const NavCloseIcon = styled(RiCloseFill)`
  font-size: 30px;
  color: #fff;

`;
export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: height 0.3s linear;
  width: 100%;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: unset;
    overflow: hidden;
    align-items: flex-start;
    background-color:#2d2d2d;
    box-shadow: 0 12px 20px #000;
    padding: 50px 15px;
    margin-top: -15px;
    position: fixed;
    width: 50%;
    height: 100vh;
    transition: .5s ease-in-out;
    left: 0;
    z-index: 1000;
    transform: ${(props) => (props.showHide ? "translateX(0) skew(0)" : "translateX(-120%) skew(10deg)")};

  }
  
`;
export const NavCategory = styled.div`
  background-color: #252323;
  position: absolute;
  top: calc(100% + 1px);
  left: -80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  transition: 0.4s;
  height: 0;
  opacity: 0;
  overflow: hidden;
  @media screen and (max-width: 576px) {
    position: relative;
    left: 0;
    height: max-content;
    top: 0;
    height: 0;
    background-color: transparent;
  }
`;
export const NavItem = styled(NavLink)`
  color: #fff;
  padding: 8px 0;
  display: block;
  text-transform: uppercase;
  transition: 0.3s;
  z-index: 99;
  text-align: center;
  &.active {
    color: transparent;
    -webkit-background-clip: text;
    background-image: ${gradientText};
  }
  &.active::before {
    width: 100%;
  }

  &:hover {
    color: transparent;
    -webkit-background-clip: text;
    background-image: ${gradientText};
  }
  cursor: pointer;
  position: relative;
  &:hover:last-child ${NavCategory} {
    height: 250px;
    opacity: 1;
    padding: 10px 0;
  
  }
 
  
  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 0;
    bottom: 0;
    left: 0;
    background-image: ${gradient};
    transition: 0.5s;
  }
  &:hover::before {
    width: 100%;
  }
  @media screen and (max-width: 576px) { 
    text-align: left;
  }
`;

export const NavCateList = styled.div`
  color: #fff;
  padding: 8px 0;
  display: block;
  text-transform: uppercase;
  transition: 0.3s;
  z-index: 99;
  &.active {
    color: transparent;
    -webkit-background-clip: text;
    background-image: ${gradientText};
  }
  &.active::before {
    width: 100%;
  }
  cursor: pointer;
  position: relative;
  &:hover ${NavCategory} {
    height: 300px;
    opacity: 1;
    padding: 10px 0;
    @media screen and (max-width: 576px) {
      height:250px;
      padding: 0;
      text-align: left;

    }
  }
  &:active{
    height: 0;
  }
  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 0;
    bottom: 0;
    left: 0;
    background-image: ${gradient};
    transition: 0.5s;
  }
  &:hover::before {
    width: 100%;
  }

`;

export const IconArrowDown = styled(BiCaretDown)`
  color: #fff;
  font-size: 16px;
`;

export const NavCategoryItem = styled(NavLink)`
  color: #fff;
  display: block;
  text-transform: capitalize;
  padding: 5px 15px;
  &:hover {
    color: transparent;
    -webkit-background-clip: text;
    background-image: ${gradientText};
  }
  &.active {
    color: transparent;
    -webkit-background-clip: text;
    background-image: ${gradientText};
  }

`;
