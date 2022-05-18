import styled from "styled-components";

import BookList from "../templates/Book/List";

import { getBooks } from "../../apis";
import { useEffect, useState } from "react";

const Book = () => {
  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const { items } = await getBooks({ query: text });
    setBooks(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshList();
  };

  return (
    <>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>검색</button>
      </Form>
      <BookList data={books} />
    </>
  );
};

const Form = styled.form``;
const List = styled.div``;

export default Book;
