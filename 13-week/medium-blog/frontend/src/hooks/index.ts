import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useBlogStore } from "../store/Blogstore";

export interface Blog{
     "content":string,
     "title":string,
     "id":string,
     "author":{
        "name":string
     }
}

export const useBlogs = () => {

// const [loading, setLoading] = useState(true);
// const [blogs, setBlogs] = useState<Blog[]>([]);

const {blogs,loading,setBlogs,setLoading} = useBlogStore();


useEffect(() => {
   if(blogs.length > 0) return;

   setLoading(true);

   axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{ headers: {
    Authorization:localStorage.getItem("token")
   }})
   .then(response => {
    setBlogs(response.data.blogs);
    setLoading(false);
   })
},[])

return {
    loading,
    blogs
}
}

export const useBlog = ({id}:{id:string}) => {

//    const [loading, setLoading] = useState(true);
// const [blog, setBlog] = useState<Blog[]>([]);

const { blogs,blog,setBlog,setLoading, loading} = useBlogStore();

useEffect(() => {

   const existing = blogs.find( b => b.id === id);
   if(existing){
      setBlog(existing);
      setLoading(false);
      return;
   }

   setLoading(true);

   axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{ headers: {
    Authorization:localStorage.getItem("token")
   }})
   .then(response => {
    setBlog(response.data.blog);
    setLoading(false);
   })
},[id])

return {
    loading,
    blog
}
}