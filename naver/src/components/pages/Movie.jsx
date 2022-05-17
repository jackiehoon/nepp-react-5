import { useState, useEffect } from "react";
import styled from "styled-components";

import { getMovies } from "../../apis";
import MovieList from "../templates/Movie/MovieList";
import { countryList } from "../../datas";

const Movie = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    refreshMovies();
  }, []);

  const refreshMovies = async () => {
    const result = await getMovies(text);
    setMovies(result.items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshMovies();
  };

  return (
    <Layout>
      <h1>영화</h1>
      <Form onSubmit={handleSubmit}>
        <select>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>검색</button>
      </Form>
      <MovieList data={movies} />
    </Layout>
  );
};

const Layout = styled.div``;
const Form = styled.form``;

export default Movie;
