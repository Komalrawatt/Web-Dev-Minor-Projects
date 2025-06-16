import React from 'react'
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import {AppContext} from "./Context/AppContext"
import {useEffect } from 'react'
import './App.css'

const App = () => {
  const {fetchBlogPosts}=React.useContext(AppContext);
  useEffect(()=>{
fetchBlogPosts();
},[]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center '> 
<Header/>
<Blogs/>
<Pagination/>
    </div>
  )
}

export default App