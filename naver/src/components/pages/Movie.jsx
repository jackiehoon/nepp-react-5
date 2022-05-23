import { useState, useEffect } from "react";
import styled from "styled-components";

import { getMovies } from "../../apis";
import Pagination from "../organisms/Pagination";
import MovieList from "../templates/Movie/MovieList";
import SearchForm from "../templates/Movie/SearchForm";

const display = 10;

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({
    query: "",
    country: "ALL",
  });
  const { query, country } = params;

  useEffect(() => {
    refreshMovies();
  }, [params, page]);

  useEffect(() => {
    setPage(1);
  }, [params]);

  const refreshMovies = async () => {
    if (!query) return;

    // display 10
    // page  1 2  3  9  10 11  20  100
    // start 1 11 21 81 91 101 191 991

    const start = (page - 1) * display + 1;
    const params = { query, start };
    if (country !== "ALL") params.country = country;

    const { items, total } = await getMovies(params);
    setMovies(items);
    setTotal(total);
  };

  // 검색어바뀌면 page를 1로
  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <Layout>
      <h1>영화</h1>
      <SearchForm onChange={handleChange} />
      <MovieList data={movies} />
      <Pagination
        nowPage={page}
        display={display}
        total={total}
        onChange={(val) => setPage(val)}
      />
    </Layout>
  );
};

const Layout = styled.div``;

export default Movie;
