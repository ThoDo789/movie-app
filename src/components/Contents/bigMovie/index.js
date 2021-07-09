import React from "react";
import { MovieContainer, Row } from "../../stylesAbstracts";

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
