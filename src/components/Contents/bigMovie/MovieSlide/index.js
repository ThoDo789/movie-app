import React, { useCallback, useState } from "react";
import * as vscIcon from "react-icons/vsc";
import { useSelector } from "react-redux";
import { selectList, selectStatus } from "../../../../container/slice";
import useInterval from "../../../customHooks/CustomInteval";
import useCustomList from "../../../customHooks/CustomList";
import LoadingPage from "../../../pages/loadingPage";
import {
  BtnSlide,
  MovieImg,
  MovieItem,
  MovieList,
  MovieSlideWrap,
  MovieTitle,
  NextSlide,
  PrevSlide,
} from "./MovieSlideElements";


const MovieSlide = () => {
  const list = useSelector(selectList);
  const status = useSelector(selectStatus);
  const newList = useCustomList(list);

  const [currentIndex, setCurrentIndex] = useState(0);

  const NextSlice = useCallback(() => {
    setCurrentIndex(currentIndex < 5 ? currentIndex + 1 : 0);
  }, [currentIndex]);
  const PrevSlice = useCallback(() => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 5);
  }, [currentIndex]);

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

        {newList && status !== "loading" ? (
          newList.map((item, index = 5) => {
            return (
              <MovieItem
                to={`/detail/${encodeURIComponent(item.imageUrl)}`}
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
        ) : (
          <LoadingPage />
        )}
      </MovieList>
    </MovieSlideWrap>
  );
};

export default MovieSlide;
