import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "./rocketSlice";

const Rocket = () => {
  const { rockets, isLoading, isError, errorMessage } = useSelector(
    (state) => state.rocket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  if (isLoading) return <h1>Loading......</h1>;
  if (isError) return <h1>{errorMessage}</h1>;

  return (
    <div>
      <h1>All Rockets</h1>

      {rockets.length > 0 &&
        rockets.map((item, index) => <li key={index}>{item.description}</li>)}
    </div>
  );
};

export default Rocket;
