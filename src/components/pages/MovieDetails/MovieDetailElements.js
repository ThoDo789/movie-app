import styled from "styled-components";

export const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 150px;
  @media screen and (max-width: 576px) {
    padding-top: 200px;
  }
`;
export const PlayerWrap = styled.div`
  position: relative;
  padding: 15px;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  width: 100%;
  display: ${(props) => (props.isShowFilm ? "block" : "none")};
`;
export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
export const DetailImg = styled.div`
  width: 100%;
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
  padding-top: 15px;
  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
    order: 4;
  }
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 15px;
  max-height: 70vh;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  order: 1;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-space-evenly;
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
    z-index: 2;
    background-color: transparent;
  }
`;
export const Title = styled.h4`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-top: 15px;
  @media screen and (max-width: 576px) {
    margin: 20px 0;
  }
`;

export const Episole = styled.span`
  font-size: 16px;
  font-weight: 500px;
  color: #fff;
  display: block;
  margin: 15px 0;
`;

export const Category = styled.span`
  display: block;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: #fff;
`;
export const EpisoleList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin: 0 -5px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;
export const Description = styled.p`
  color: #fff;
  margin-bottom: 15px;
`;

export const EpisoleQtv = styled.button`
  outline: none;
  border: none;
  background-color: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 10px 5px;
  z-index: 2;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  &:focus {
    background-color: red;
  }
`;
