import { Link } from "react-router-dom";
interface BlogCardProps {
    id :string
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
}

const BlogCard = ({
    id,
  authorName,
  title,
  content,
  publishDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-3xl cursor-pointer">
      <div className="flex">
        <div className="">
          <Avatar name={authorName} />
        </div>

        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
        <div className="flex justify-center flex-col pl-2">
          <Circle />
        </div>
        <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col">{publishDate}</div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(content.length / 100)} Minutes raed`}</div>
    </div>
     </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-600"></div>;
}

export const Avatar = ({ name,size = "small" }: { name: string, size?: "small" | "big" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-slate-800 rounded-full text-white`}>
      <span className={` ${size === "small" ? "text-xs" : "text-lg"} font-medium`}>{name[0]}</span>
    </div>
   
  );
}

export default BlogCard;
