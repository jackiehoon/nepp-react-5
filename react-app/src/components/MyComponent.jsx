function MyComponent({ name, name2, children }) {
  // const { name, name2, children } = props;

  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      {name2}
      <h1>{children}</h1>
    </div>
  );
}

export default MyComponent;
