import axios from "axios";


async function getUserData(){
  await new Promise((r) => setTimeout(r, 5000))
  const response = await axios.get(" http://localhost:3000/api/user")
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserData();


  return (
   <div className="justify-center flex flex-col h-screen">

    <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
             {userDetails.email}
          </div>
          <div>
             {userDetails.name}
          </div>
        </div>
    </div>
   </div>
  );
}
