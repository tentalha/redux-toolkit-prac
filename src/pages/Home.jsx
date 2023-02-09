import Counter from "../features/counter/Counter";
import AddTodo from "../features/todos/AddTodo";
import AllTodo from "../features/todos/AllTodo";

const Home = () => {
  return (
    <div>
      <Counter />
      <div style={{ marginTop: 10 }}>
        <AddTodo />
        <AllTodo />
      </div>
    </div>
  );
};

export default Home;
