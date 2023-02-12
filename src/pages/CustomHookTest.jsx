import { useGetData } from "../hooks/useGetData";

const CustomHookTest = () => {
  const { data, isLoading, error } = useGetData("https://dummyjson.com/todos");
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      {data?.todos?.map((item, index) => (
        <li key={index}>{item.todo}</li>
      ))}
    </div>
  );
};

export default CustomHookTest;
