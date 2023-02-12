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
      <ul>
        <Link to={`rockets`}>Rocket</Link>
      </ul>
      <ul>
        <Link to={`search`}>Search</Link>
      </ul>
    </div>
  );
};

export default Navabr;
