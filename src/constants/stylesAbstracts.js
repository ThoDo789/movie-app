import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  margin: 0 auto;
`;
export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
`;

export const ContentWrap = styled.div`
  padding-top: 160px;
  @media screen and (max-width: 992px) {
    padding-top: 180px;
  }
`;
export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
export const HeaderWrapper = styled.div`
  z-index: 110;
  background-color: #2d2d2d;
  position: fixed;
  width: 100vw;
  box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
`;
const color = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "red",
];

const colorText = ["red", "orange", "yellow", "green"];
export const gradient = `linear-gradient(
  45deg,
 ${color.toString()}
)`;
export const gradientText = `linear-gradient(
  45deg,
 ${colorText.toString()}
)`;
