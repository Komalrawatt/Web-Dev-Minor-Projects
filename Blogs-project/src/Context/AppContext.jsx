import React, { createContext, useState } from "react";
export const AppContext = createContext();
import { baseUrl } from '../../BaseUrl';

//step1 context created
export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.log("error in fetching data", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
   function handlePageChange(page){
    setPage(page); 
    fetchBlogPosts(page);
   }

    //step2 context provider created

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}