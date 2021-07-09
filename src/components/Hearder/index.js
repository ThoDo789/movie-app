import React from "react";
import styled from "styled-components";
import HeaderLabel from "./Nav/headerLabel/HeaderLabel";
import HeaderNav from "./Nav/headerNav/HeaderNav";
const Header = () => {
const Header = styled.div`
z-index:110;
background-color: #2d2d2d;
position: fixed;
width: 100vw;
box-shadow: 0 5px 10px rgb(0 0 0 / 20%);



`
  return (
    <Header >
      <HeaderLabel />
      <HeaderNav />
    </Header>
  );
};

export default Header;
