import "./App.css";
import reactLogo from "./assets/react.svg";
import Counter from "./features/counter/Counter";
import AddTodo from "./features/todos/AddTodo";
import AllTodo from "./features/todos/AllTodo";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <div style={{ marginTop: 10 }}>
        <AddTodo />
        <AllTodo />
      </div>
    </div>
  );
};

export default App;
