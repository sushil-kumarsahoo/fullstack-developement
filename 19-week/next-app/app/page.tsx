
export default async function Home() {
  const response = await fetch("https://dummyjson.com/todos/random");
  const data = await response.json();
  console.log("data found from backend server is");
  console.log(JSON.stringify(data));
  

  return (
    <div>
      <h1>{data.todo}</h1>
      <p>{data.completed ? "Done" : " Not Done"}</p>
    </div>
  );
}
