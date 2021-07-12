import React from "react";
import { MovieContainer, Row } from "../../../constants/stylesAbstracts";

import MovieSlide from "./MovieSlide";

const BigMovie = () => {
  return (
    <Row>
      <MovieContainer>
        <MovieSlide />
      </MovieContainer>
    </Row>
  );
};

export default BigMovie;
