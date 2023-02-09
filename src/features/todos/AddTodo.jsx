import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAll, removeTodo } from "./todoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => dispatch(addTodo({ id: todos.length + 1, title: text }))}
      >
        Add
      </button>
      {todos.length !== 0 && (
        <button onClick={() => dispatch(removeAll())}>Remove all</button>
      )}
    </div>
  );
};

export default AddTodo;
