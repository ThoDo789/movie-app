import React, { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Row } from "../../../constants/stylesAbstracts";
import { Button } from "../../Hearder/headerLabel/HeaderLabelElements";
import {
  BtnWrap, Category, Description,
  DetailContent,
  DetailImg,
  DetailWrap,

  Episole,
  EpisoleList,
  EpisoleQtv,



  Iframe, Img,





  PlayerWrap, Title
} from "./MovieDetailElements";



const MovieDetail = () => {
  const { url } = useParams();
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem("newList"));

  const [index, setIndex] = useState(0);
  const [isShow, setIsShow] = useState(localStorage.getItem("isShow"));
  localStorage.setItem("isShow", isShow === false);

  const newItem = data.filter(
    (item) => encodeURIComponent(item.imageUrl) === url
  );
  console.log(newItem, "hhh");
  var  qtvEpisole = newItem[0].episode[0].length;

  try{
    if(qtvEpisole ==="undefined") throw "empty"
  
  }catch(error){
    console.log("falid")
      history.push("")
  }

  const backHome = () => {
    window.scroll(0, 0);
    history.push("/");
  };

  return (
    <DetailWrap>
      {data.length !== 0 && (
        <Row>
          <PlayerWrap isShowFilm={isShow}>
            <Iframe
              src={
                qtvEpisole === 1
                  ? newItem[0].episode[0].url
                  : newItem[0].episode[index].url
              }
              title="W3Schools Free Online Web Tutorials"
              allowFullScreen
            ></Iframe>
          </PlayerWrap>

          <DetailImg>
            <Img alt="tt" src={newItem[0].imageUrl} />
          </DetailImg>

          <DetailContent>
            <Title>
              
              {newItem[0].title} &nbsp; Tập: {index +1}
            
            </Title>
            <BtnWrap>
              <Button
                onClick={() => {
                  setIsShow(true);
                  window.scroll(0, 0);
                }}
              >
                Xem Phim{" "}
              </Button>
              <Button onClick={backHome}>Quay lại</Button>
            </BtnWrap>

            <Episole>
              Số tập: &nbsp;
              {newItem[0].episode.length !== 0
                ? newItem[0].episode.length
                : " 1"}
            </Episole>
            <Category>Thể loại: {newItem[0].category}</Category>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              magni incidunt eos. Vel sint aperiam facilis. Laudantium amet
              eveniet quo reiciendis, aliquid sunt accusantium doloremque
              deleniti a molestias mollitia explicabo.
            </Description>
            <EpisoleList>
              {newItem[0].episode.map((item, episode) => (
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
};;

export default MovieDetail;
