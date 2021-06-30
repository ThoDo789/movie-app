import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiCaretDown } from "react-icons/bi";
import { gradient } from "../../../stylesAbstracts";
export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 0 15px;
`;
export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
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
`;
export const NavItem = styled(Link)`
  color: #fff;
  padding: 8px 0;
  display: block;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    color: #e8c829;
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
`;
export const IconArrowDown = styled(BiCaretDown)`
  color: #fff;
  font-size: 16px;
`;

export const NavCategoryItem = styled.div`
  color: #fff;
  display: block;
  text-transform: capitalize;
  padding: 5px 15px;
  &:hover {
    color: #e8c829;
  }
`;
