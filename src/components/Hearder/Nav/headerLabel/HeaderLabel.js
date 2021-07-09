import React, { useState } from "react";
import { Wrapper, Row } from "../../../stylesAbstracts";
import {
  HeaderWrap,
  HeaderSearch,
  HeaderLogo,
  Img,
  Title,
  Input,
  HeaderContainer,
  Button,
  InputWrap,
} from "./HeaderLabelElements";
import logo from "../../../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getSearch } from "../../../../container/searchSlice";

const HeaderLabel = () => {
  const [search, SetSearch] = useState("");
  const dispatch = useDispatch()
  const onHandleSubmit = (e)=>{
      e.preventDefault();
      console.log(search)
      dispatch(getSearch(search))
      history.push("/search")
  }
  const history = useHistory()
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <HeaderWrap>
            <HeaderLogo to="/">
              <Img alt="logo" src={logo} />
              <Title>Phim Hot</Title>
            </HeaderLogo>
            <HeaderSearch onSubmit={onHandleSubmit}>
              <InputWrap>
                <Input type="text" placeholder="Tên phim..." value={search} name="search" onChange={(e)=>{SetSearch(e.target.value)}}/>
              </InputWrap>
              <Button>Tìm kiếm</Button>
            </HeaderSearch>
          </HeaderWrap>
        </Row>
      </HeaderContainer>
    </Wrapper>
  );
};

export default HeaderLabel;
