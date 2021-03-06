import React from "react";
import { ContentWrap } from "../../constants/stylesAbstracts";
import BigMovie from "./bigMovie";
import List from "./home";

const Content = () => {
  return (
    <ContentWrap>
      <BigMovie />
      <List />
    </ContentWrap>
  );
};

export default Content;
