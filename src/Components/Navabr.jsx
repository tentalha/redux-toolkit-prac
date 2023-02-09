import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <div>
      <ul>
        <Link to={`/`}>Home</Link>
      </ul>
      <ul>
        <Link to={`about`}>About</Link>
      </ul>
    </div>
  );
};

export default Navabr;
