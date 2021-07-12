import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import logo from "../../../assets/images/logo.png";
import { getSearch, selectSearchKey } from "../../../container/searchSlice";
import { Row, Wrapper } from "../../../constants/stylesAbstracts";
import {
  Button,
  HeaderContainer,
  HeaderLogo,
  HeaderSearch,
  HeaderWrap,
  Img,
  Input,
  InputWrap,
  Title,
} from "./HeaderLabelElements";

const HeaderLabel = () => {
  const key = useSelector(selectSearchKey);
  const dispatch = useDispatch();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(key));
    history.push("/search");
  };
  const history = useHistory();
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
                <Input
                  type="text"
                  placeholder="Tên phim..."
                  value={key}
                  name="search"
                  onChange={(e) => {
                    dispatch(getSearch(e.target.value));
                    history.push("/search");
                  }}
                />
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
