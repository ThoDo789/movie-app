import React from "react";
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
const HeaderLabel = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <HeaderWrap>
            <HeaderLogo to="/">
              <Img alt="logo" src={logo} />
              <Title>Phim Hot</Title>
            </HeaderLogo>
            <HeaderSearch>
              <InputWrap>
                <Input type="text" placeholder="Tên phim..." />
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
