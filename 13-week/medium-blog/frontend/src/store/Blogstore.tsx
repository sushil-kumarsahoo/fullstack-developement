import {create} from 'zustand'
import { Blog } from '../hooks'

interface BlogStore{
    blogs:Blog[];
    blog: Blog | null;
    loading: boolean;
    setBlogs: (blogs: Blog[]) => void;
    setBlog: (blog: Blog) => void;
    setLoading: (loading : boolean) => void;
    clearBlogs: () => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
    blogs:[],
    blog:null,
    loading:false,
    setBlogs: (blogs) => set({blogs}),
    setBlog: (blog) => set({blog}),
    setLoading: (loading) => set({loading}),
    clearBlogs: () => set({ blogs: [], blog:null}),
    }));