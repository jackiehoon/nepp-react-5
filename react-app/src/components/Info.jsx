import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("name값이 바꼈습니다.");
    console.log({ name, nickname });
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <h2>이름:{name}</h2>
      <h2>닉네임:{nickname}</h2>
    </>
  );
};

export default Info;
