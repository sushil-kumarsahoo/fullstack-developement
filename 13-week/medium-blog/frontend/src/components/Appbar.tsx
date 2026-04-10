import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useBlogStore } from "../store/Blogstore";


const Appbar = () => {

    const navigate = useNavigate();
    const {logout} = useAuthStore();
    const {clearBlogs} = useBlogStore();

    const handleLogout = () => {
      logout();
      clearBlogs();
      navigate("/");
    }


  return (
    <div className="border-b  border-gray-200 flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
            Medium
            </Link>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
                </Link>
            <Avatar size={"big"} name="Sushil" />      

            <button
          onClick={handleLogout}
          className="ml-4 text-white bg-red-500 hover:bg-red-600 rounded-full text-sm px-5 py-2.5"
        >
          Logout
        </button>

        </div>
    </div>
  )
}

export default Appbar
