import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectList } from "../../../../container/slice";
import { Row } from "../../../stylesAbstracts";
import {
  IconArrowDown,

   NavBar,
  NavBarIcon,
 
  NavCategory,
 
  NavCategoryItem,
  NavCateList,

   NavIcon,

   NavItem,
  NavList,
} from "./HeaderNavElements";

const HeaderNav = () => {
  const list = useSelector(selectList);
  const [isShow, SetIsShow] = useState(false);

  if (list.length !== 0) {
    const newArr = Object.entries(list.phim);

    const newCategories = Array.from(
      new Set(newArr[0][1].map((item) => item.category))
    );
    var elmentsCategory = newCategories.map((item, key) => (
      <NavCategoryItem key={key}>{item}</NavCategoryItem>
    ));
  }
  return (
    <Row>
      <NavBar>
        <NavIcon onClick={() => SetIsShow(!isShow)}>
          <NavBarIcon />
        </NavIcon>
        <NavList showHide={isShow}>
          <NavItem to="/phim-bo">Phim bộ</NavItem>
          <NavItem to="/phim-le">Phim lẻ</NavItem>
          <NavItem to="/phim-chieu-rap"> Phim chiếu rạp</NavItem>
          <NavItem to="/phim-hoat-hinh">Phim hoạt hình</NavItem>
          <NavCateList>
            Thể loại <IconArrowDown />
            <NavCategory>{elmentsCategory}</NavCategory>
          </NavCateList>
        </NavList>
      </NavBar>
    </Row>
  );
};

export default HeaderNav;
