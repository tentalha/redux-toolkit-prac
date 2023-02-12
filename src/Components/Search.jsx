import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "./HOCs/Layout";

const Search = () => {
  const todos = useSelector((state) => state.todo.todo);
  const [input, setInput] = useState("");

  const newList = () => {
    const _list = todos.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    return _list;
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {newList().map((item, index) => (
        <li key={index}>{item?.title}</li>
      ))}
    </>
  );
};

export default Search;
