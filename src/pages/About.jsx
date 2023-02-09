import { useState } from "react";
import { useSelector } from "react-redux";

const About = () => {
  const todo = useSelector((state) => state.todo.todo);
  const [value, setValue] = useState(null);

  return (
    <div>
      {todo.length > 0 ? (
        <select onChange={(e) => setValue(e.target.value)}>
          <option>Select</option>
          {todo.map((item, index) => (
            <option key={index} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      ) : (
        <p>No todo to select.</p>
      )}
    </div>
  );
};

export default About;
