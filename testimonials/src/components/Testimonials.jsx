import Cards from './Cards'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {React,useState} from 'react';
const Testimonials = (props) => {
  let reviews =props.reviews;
  const[index,setindex]=useState(0);
  function leftShiftHandler(){
  if(index-1<0){
   setindex(reviews.length-1)
  }
  else{
    setindex(index-1);
  }
  }
  function rightShiftHandler(){
if(index+1>=reviews.length){
  setindex(0);
}
else{
  setindex(index+1);
}
  }
  function surpriseHandler(){
    let randomIndex=Math.floor(Math.random() * reviews.length)
    setindex(randomIndex);
  }
  return (
    
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transform-all duration-700 hover:shadow-xl rounded-md'>
      <Cards review={reviews[index]}/>

      <div className='flex text-3xl mt-6 gap-3 text-violet-400 font-bold mx-auto '>
            <button onClick={leftShiftHandler}className='cursor-pointer  hover:text-violet-500'>
                <FiChevronLeft/> 
            </button>
            <button  onClick={rightShiftHandler}className='cursor-pointer  hover:text-violet-500'>
            <FiChevronRight/> 

            </button>
        </div>
        <div className='bg-violet-400 hover:bg-violet-500 transition-all duration-200  cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg w-[200px] mx-auto mt-3'>
              <button onClick={surpriseHandler}>
                Surprise me
              </button>
       </div>
    </div>
  )
}

export default Testimonials