import React from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import Spinner from './Spinner';
// import "./Blogs.css";

const Blogs = () => {
  //consume context
  const { loading, posts } = React.useContext(AppContext);
  console.log("printing posts");
  console.log(posts);
  return (
    <div className='mt-16  w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7 mb-13 '>
      {
        loading ?
          <div className='min-h-[80vh] flex justify-center items-center'>
          <Spinner />
        </div> :
          (
            posts.length === 0 ?
              (
                <div>
                  <p>
                    No Post Found
                  </p>
                </div>
              ) :
              (
                posts.map((post) => (
                  <div key={post.id}>
                    <p className='font-bold text-sm '>{post.title}</p>
                    <p className='text-[12px]'>
                      By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                    </p>
                    <p className='text-[12px]'>Posted on {post.date}</p>
                    <p className='text-[11px] mt-[10px]'>{post.content}</p>
                    <div className='flex gap-x-3'>
                      {post.tags.map((tag, index) => {
                        return <span className='text-blue-500 underline font-bold text-[8px]' key={index}>{` #${tag}`}</span>
                      })}
                    </div>
                  </div>

                ))
              )
          )
      }
    </div>
  )
}

export default Blogs