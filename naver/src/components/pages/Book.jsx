import styled from "styled-components";

import BookList from "../templates/Book/List";

import { getBooks } from "../../apis";
import { useEffect, useState } from "react";
import Pagination from "../organisms/Pagination";
import { useSearchParams } from "react-router-dom";

const display = 10;
const Book = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const querySP = searchParams.get("query");
  const pageSP = searchParams.get("page");

  useEffect(() => {
    if (querySP) {
      setText(querySP);
      setQuery(querySP);
      if (pageSP) setPage(+pageSP);
    } else {
      setText("");
      setBooks([]);
      setTotal(0);
    }
  }, [querySP, pageSP]);

  useEffect(() => {
    refreshList();
  }, [query, page]);

  const refreshList = async () => {
    if (!query) return;
    const start = (page - 1) * display + 1;
    const { items, total } = await getBooks({ query, start });
    setBooks(items);
    setTotal(total);
    setSearchParams({ query, page });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
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
