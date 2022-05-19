import styled from "styled-components";

import BookList from "../templates/Book/List";

import { getBooks } from "../../apis";
import { useEffect, useState } from "react";
import Pagination from "../organisms/Pagination";
const display = 10;
const Book = () => {
  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    refreshList();
  }, [page]);

  const refreshList = async () => {
    if (!text) return;
    const start = (page - 1) * display + 1;
    const { items, total } = await getBooks({ query: text, start });
    setBooks(items);
    setTotal(total);
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
      <Pagination
        nowPage={page}
        display={display}
        total={total}
        onChange={(val) => setPage(val)}
      />
    </>
  );
};

const Form = styled.form``;

export default Book;
