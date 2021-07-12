import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import useCustomList from "../../customHooks/CustomList";
import { getPost, selectList } from "../../../container/slice";
import { Row } from "../../../constants/stylesAbstracts";
import {
  Img,
  MovieContainer,
  MovieLink,
  MovieWrap,
  Title,
} from "./MovieListElements";
import "./stylePagination.css";
import { getFlatList } from "../../../container/movieSlice";

AOS.init();
const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 20;
  const newList = useCustomList(list);

  dispatch(getFlatList(newList));
  if (newList) {
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost + postsPerPage;

    var currentPosts = newList.slice(indexOfLastPost, indexOfFirstPost);

    var pageCount = Math.ceil(newList.length / postsPerPage);

    var changePage = ({ selected }) => {
      setCurrentPage(selected);
    };
  }

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      <MovieContainer>
        <Row>
          {newList &&
            currentPosts.map((item, key) => {
              return (
                <MovieWrap
                  key={key}
                  data-aos={key % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay="50"
                >
                  <MovieLink
                    to={`/detail/${encodeURIComponent(item.imageUrl)}`}
                  >
                    <Img alt={item.title} src={item.imageUrl} />
                    <Title>{item.title}</Title>
                  </MovieLink>
                </MovieWrap>
              );
            })}
        </Row>
      </MovieContainer>

      {newList && (
        <div className="pagination-wrap">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      )}
    </div>
  );
};

export default List;
