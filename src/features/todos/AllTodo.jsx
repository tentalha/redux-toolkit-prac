import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./todoSlice";

const AllTodo = () => {
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos?.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                console.log(item.id);
                dispatch(removeTodo(item.id));
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No todo to show!</p>
      )}
    </div>
  );
};

export default AllTodo;
