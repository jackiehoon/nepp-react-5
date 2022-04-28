import { useState } from "react";

const IterationSample = () => {
  const [text, setText] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const handleClick = () => {
    if (!text) return;

    const newArr = [...names, text];
    setNames(newArr);
    setText("");
  };

  const handleDelete = (id) => {
    filter;
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>입력</button>

      <ul>
        {names.map((name, i) => (
          <div key={i}>
            <li onDoubleClick={() => handleDelete(name.id)}>
              {name.text} 입니다
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
