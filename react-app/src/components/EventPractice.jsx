import { useState } from "react";

const EventPractice = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");
  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);

  const [form, setForm] = useState({
    username: "",
    message: "",
    message2: "",
  });
  const { username, message, message2 } = form;

  const onChange = (e) => {
    const { name, value } = e.target;
    const nextForm = {
      ...form,
      [name]: value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(`${username}: ${message}: ${message2}`);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <h2>{message}</h2>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={onChange}
        value={username}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={message}
      />
      <input
        type="text"
        name="message2"
        placeholder="아무거나 입력해 보세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={message2}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
