import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useInterval from "../../../customHooks/CustomInteval";
import * as vscIcon from "react-icons/vsc";
import {
  MovieSlideWrap,
  MovieList,
  MovieItem,
  MovieTitle,
  NextSlide,
  PrevSlide,
  MovieImg,
  BtnSlide,
} from "./MovieSlideElements";
import { getId } from "../../../../container/movieSlice";
import { selectList } from "../../../../container/slice";
import useCustomList from "../../../customHooks/CustomList";
const MovieSlide = () => {
  let data = JSON.parse(localStorage.getItem("reduxState"));

  const newList = Object.entries(data)[1][1].list;
  const list = useSelector(selectList);
  const newListSlice = useCustomList(list);
  console.log(list, 789789);
  console.log(newList, "thkth");

  useEffect(() => {
    if (data !== null) {
      data = newListSlice;
    }
  }, [data, newList]);
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  const NextSlice = () => {
    setCurrentIndex(currentIndex < 5 ? currentIndex + 1 : 0);
  };
  const PrevSlice = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 5);
  };

  useInterval(() => {
    setCurrentIndex(currentIndex < 5 ? currentIndex + 1 : 0);
  }, 10000);

  return (
    <MovieSlideWrap>
      <MovieList>
        <BtnSlide>
          <PrevSlide onClick={PrevSlice}>
            <vscIcon.VscArrowLeft />
          </PrevSlide>
          <NextSlide onClick={NextSlice}>
            <vscIcon.VscArrowRight />
          </NextSlide>
        </BtnSlide>

        {newList && data !== null
          ? newList.map((item, index = 5) => {
              return (
                <MovieItem
                  onClick={() => dispatch(getId(item.imageUrl))}
                  to={`/detail/${item.imageUrl}`}
                  key={index}
                  style={
                    index === currentIndex
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <MovieImg alt="Image banner" src={item.imageUrl} />
                  <MovieTitle>{item.title}</MovieTitle>
                </MovieItem>
              );
            })
          : ""}
      </MovieList>
    </MovieSlideWrap>
  );
};

export default MovieSlide;
