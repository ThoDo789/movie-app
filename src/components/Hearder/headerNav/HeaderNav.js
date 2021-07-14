import React, { useState } from "react";
import { Row } from "../../../constants/stylesAbstracts";
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

  NavCloseIcon

} from "./HeaderNavElements";

const HeaderNav = () => {
  const [isShow, SetIsShow] = useState(false);
  const [isShowCategory, SetIsShowCategory] = useState(false);

  return (
    <Row>
      <NavBar showHide={isShow}>
        <NavIcon onClick={() => SetIsShow(!isShow)}>
        { !isShow? <NavBarIcon />:<NavCloseIcon/>}
        </NavIcon>
        <NavList showHide={isShow} >
          <NavItem to="/phim-bo">Phim bộ</NavItem>
          <NavItem to="/phim-le">Phim lẻ</NavItem>
          <NavItem to="/phim-chieu-rap"> Phim chiếu rạp</NavItem>
          <NavItem to="/phim-hoat-hinh">Phim hoạt hình</NavItem>
          <NavCateList onClick={()=>(SetIsShowCategory(!isShowCategory))} >
            Thể loại <IconArrowDown />
            <NavCategory isCategoryShow={isShowCategory}>
              <NavCategoryItem to="/phim-tinh-cam">
                phim tình cảm
              </NavCategoryItem>
              <NavCategoryItem to="/phim-hanh-dong">
                phim hành động
              </NavCategoryItem>
              <NavCategoryItem to="/phim-hoat-hinh">
                phim hoạt hình
              </NavCategoryItem>
              <NavCategoryItem to="/phim-hai">phim hài</NavCategoryItem>
              <NavCategoryItem to="/tv-show">TV SHOW </NavCategoryItem>
              <NavCategoryItem to="/phim-phieu-luu">
                phim phiêu lưu
              </NavCategoryItem>
              <NavCategoryItem to="/phim-co-trang">
                phim cổ trang
              </NavCategoryItem>
              <NavCategoryItem to="/phim-kinh-di">phim kinh dị</NavCategoryItem>
            </NavCategory>
          </NavCateList>
        </NavList>
      </NavBar>
    </Row>
  );
};

export default HeaderNav;
