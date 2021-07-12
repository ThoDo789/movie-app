import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ContentWrap, Row } from "../../../constants/stylesAbstracts";
import { selectSearchKey } from "../../../container/searchSlice";
import { selectList } from "../../../container/slice";
import {
  Img,
  MovieContainer,
  MovieLink,
  MovieWrap,
  Title,
} from "../../Contents/home/MovieListElements";
import { ResultTitle, ResultTitleWrap, BackHome } from "./SearchResultElements";

import "../../Contents/home/stylePagination.css";
import useCustomList from "../../customHooks/CustomList";

const SearchResult = () => {
  const list = useSelector(selectList);
  const newListSearch = useCustomList(list);
  const history = useHistory();
  const key = useSelector(selectSearchKey);

  const [currentPage, setCurrentPage] = useState(0);
  const [keySearch, setKeySearch] = useState(key);
  if (keySearch === "") {
    history.push("/");
  }
  const postsPerPage = 20;
  var newFilterList = useMemo(() => {
    if (list.length !== 0) {
      if (!key) {
        return newListSearch;
      }
      return newListSearch.filter((item) => {
        return item.title.toLowerCase().includes(key.toLowerCase());
      });
    }
  }, [key, newListSearch, list]);
  if (newFilterList) {
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost + postsPerPage;

    var currentPosts = newFilterList.slice(indexOfLastPost, indexOfFirstPost);

    var pageCount = Math.ceil(newFilterList.length / postsPerPage);

    var changePage = ({ selected }) => {
      setCurrentPage(selected);
    };
  }

  return (
    <ContentWrap>
      {newFilterList && (
        <ResultTitleWrap>
          <ResultTitle>có {newFilterList.length} kết quả cho bạn</ResultTitle>
          &nbsp; | &nbsp;
          <BackHome to="/">Home</BackHome>{" "}
        </ResultTitleWrap>
      )}

      <MovieContainer>
        <Row>
          {newFilterList &&
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
      {newFilterList && (
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
    </ContentWrap>
  );
};

export default SearchResult;
