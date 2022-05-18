import { useState } from "react";
import styled from "styled-components";

import { countryList } from "../../../datas";

const SearchForm = ({ onChange }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: text });
  };

  const handleCountry = (e) => {
    const { value } = e.target;
    onChange({ name: "country", value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <select onChange={handleCountry}>
        <option value="ALL">전체</option>
        {countryList.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>검색</button>
    </Form>
  );
};

const Form = styled.form``;

export default SearchForm;
