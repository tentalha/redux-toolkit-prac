import { useState } from "react";
import { useSelector } from "react-redux";

export const Search = () => {
  const todos = useSelector((state) => state.todo.todo);
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const newList = () => {
    return todos.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <>
      <input type="text" value={input} onChange={handleOnChange} />
      {newList().map((item, index) => (
        <li key={index}>{item?.title}</li>
      ))}
    </>
  );
};
