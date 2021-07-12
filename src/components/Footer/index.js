import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { gradientText, Row } from "../../constants/stylesAbstracts";
import Logo from "../../assets/images/logo.png";
import {
  FooterWrapper,
  Social,
  BtnIcon,
  LogoFooter,
  Location,
  InfoAuthor,
  LogoWrap,
  LocationIcon,
  LocationText,
  PhoneIcon,
  EndPage,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrap to="/">
        <LogoFooter alt="logo" src={Logo} />
      </LogoWrap>
      <Social>
        <BtnIcon>
          <FaIcons.FaFacebook />
        </BtnIcon>
        <BtnIcon>
          <SiIcons.SiGmail />
        </BtnIcon>
        <BtnIcon>
          <FaIcons.FaTwitter />
        </BtnIcon>
        <BtnIcon>
          <FaIcons.FaInstagram />
        </BtnIcon>
      </Social>

      <InfoAuthor>
        <Location>
          <LocationIcon />
          <LocationText>Thành phố Tây Ninh, Tỉnh Tây Ninh</LocationText>
        </Location>
        <Location>
          <PhoneIcon />
          <LocationText>0967263872</LocationText>
        </Location>
      </InfoAuthor>
      <EndPage>
        Copyright {new Date(Date.now()).getFullYear()} © Tho Do by react-redux{" "}
      </EndPage>
    </FooterWrapper>
  );
};

export default Footer;
