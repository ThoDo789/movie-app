import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Button } from "../../Hearder/Nav/headerLabel/HeaderLabelElements";

import { Row } from "../../stylesAbstracts";
import {
  Description,
  DetailContent,
  DetailImg,
  DetailWrap,
  Img,
  Episole,
  EpisoleList,
  EpisoleQtv,
  Title,
  Category,
  PlayerWrap,
  Iframe,
  BtnWrap,
} from "./MovieDetailElements";
const MovieDetail = () => {
  const data = JSON.parse(localStorage.getItem("reduxState"));
  const newId = Object.entries(data)[1][1].id;
  const list = Object.entries(data)[1][1].list;
  const [index, setIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  // const status = useSelector(selectStatus)

  const newItem = list.find((item) => item.imageUrl === newId);
  const qtvEpisole = newItem.episode.length;
  const history = useHistory();
  const backHome = () => {
    window.scroll(0, 0);
    history.push("/");
  };
  useEffect(() => {
    if (list) console.log(newItem);
  }, []);

  return (
    <DetailWrap>
      {list.length !== 0 && (
        <Row>
          <PlayerWrap isShowFilm={isShow}>
            <Iframe
              src={
                qtvEpisole === 1
                  ? newItem.episode[0].url
                  : newItem.episode[index].url
              }
              title="W3Schools Free Online Web Tutorials"
              allowFullScreen
            ></Iframe>
          </PlayerWrap>

          <DetailImg>
            <Img alt="tt" src={newItem.imageUrl} />
          </DetailImg>

          <DetailContent>
            <Title>{newItem.title}</Title>
            <BtnWrap>
              <Button
                onClick={() => {
                  setIsShow(true);
                  window.scroll(0,  0);;
                }}
              >
                Xem Phim{" "}
              </Button>
              <Button onClick={backHome}>Quay lại</Button>
            </BtnWrap>

            <Episole>
              Số tập: &nbsp;
              {newItem.episode.length !== 0 ? newItem.episode.length : " 1"}
            </Episole>

            <Category>Thể loại: {newItem.category}</Category>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              magni incidunt eos. Vel sint aperiam facilis. Laudantium amet
              eveniet quo reiciendis, aliquid sunt accusantium doloremque
              deleniti a molestias mollitia explicabo.
            </Description>
            <EpisoleList>
              {newItem.episode.map((item, episode) => (
                <EpisoleQtv
                  key={episode}
                  onClick={() => {
                    setIndex(episode);
                    setIsShow(true);
                    window.scroll(0, 0);
                  }}
                >
                  {episode + 1}
                </EpisoleQtv>
              ))}
            </EpisoleList>
          </DetailContent>
        </Row>
      )}
    </DetailWrap>
  );
};

export default MovieDetail;
