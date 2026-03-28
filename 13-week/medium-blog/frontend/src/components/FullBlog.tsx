import { Blog } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";



const FullBlog = ({blog}:{blog:Blog}) => {
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-15">
        <div className="col-span-8 px-25">
             <div className="text-5xl font-extrabold">
        {blog.title}
      </div>
      <div className="pt-4 text-slate-500">
        Posted on 2n dec 2023
      </div>
      <div className="text-slate-600 pt-5">
        {blog.content}
      </div>
        </div>
        <div className="col-span-4">
            <div className="text-slate-700 text-lg">
                   Author
            </div>
               
                <div className="flex w-full">
                    <div className="pr-4 flex flex-col justify-center">
                        <Avatar name={blog.author.name} size={"small"}/>
                        </div>
             <div>      
            <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
            </div>
            <div className="pt-1 text-slate-500">
                Flowbite is a library of interactive UI components built with Tailwind CSS that can. 
            </div>
            </div> 
            </div>
        </div>
     </div>
      </div>
    </div>
  );
};

export default FullBlog;
