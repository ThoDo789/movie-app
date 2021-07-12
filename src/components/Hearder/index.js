import React from "react";
import HeaderLabel from "./headerLabel/HeaderLabel";
import HeaderNav from "./headerNav/HeaderNav";
import {HeaderWrapper} from "../../constants/stylesAbstracts"
const Header = () => {

  return (
    <HeaderWrapper >
      <HeaderLabel />
      <HeaderNav />
    </HeaderWrapper>
  );
};

export default Header;
