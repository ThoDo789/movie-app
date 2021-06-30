import axios from "axios";
import React, { useState, useEffect } from "react";

import { Row } from "../../../stylesAbstracts";
import {
  NavBar,
  NavItem,
  NavList,
  IconArrowDown,
  NavCategoryItem,
  NavCategory,
} from "./HeaderNavElements";

const HeaderNav = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST";
        const res = await axios.get(url);
        await setCategories(res.data.phim);
      } catch (err) {
        console.log("error");
      }
    };
    fetchData();
  }, []);
  const newArr = Object.entries(categories);

  if (newArr.length > 0) {
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
        <NavList>
          <NavItem to="/">Phim bộ</NavItem>
          <NavItem to="/">Phim lẻ</NavItem>
          <NavItem to="/"> Phim chiếu rạp</NavItem>
          <NavItem to="/">Phim hoạt hình</NavItem>
          <NavItem to="/">
            Thể loại <IconArrowDown />
            <NavCategory>{elmentsCategory}</NavCategory>
          </NavItem>
        </NavList>
      </NavBar>
    </Row>
  );
};

export default HeaderNav;
