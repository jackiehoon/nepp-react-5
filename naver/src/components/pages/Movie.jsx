import { useState, useEffect } from "react";
import styled from "styled-components";

import { getMovies } from "../../apis";
import MovieList from "../templates/Movie/MovieList";
import SearchForm from "../templates/Movie/SearchForm";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useState({
    query: "",
    country: "ALL",
  });
  const { query, country } = params;

  useEffect(() => {
    refreshMovies();
  }, [params]);

  const refreshMovies = async () => {
    if (!query) return;

    const params = { query };
    if (country !== "ALL") params.country = country;

    const result = await getMovies(params);
    setMovies(result.items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <Layout>
      <h1>영화</h1>
      <SearchForm onChange={handleChange} />
      <MovieList data={movies} />
    </Layout>
  );
};

const Layout = styled.div``;

export default Movie;
