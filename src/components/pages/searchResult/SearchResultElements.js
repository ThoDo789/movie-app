import styled from "styled-components";
import { Link } from "react-router-dom";
import { gradientText } from "../../../constants/stylesAbstracts";

export const ResultTitleWrap = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin: 20px 0;
`;
export const ResultTitle = styled.span``;
export const BackHome = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: transparent;
    -webkit-background-clip: text;
    background-image: ${gradientText};
  }
`;
export const Social = styled.div``;
