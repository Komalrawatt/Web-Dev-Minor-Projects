import React from 'react'
import  {AppContext} from '../Context/AppContext'
const Pagination = () => {
  const {page,totalPages, handlePageChange}=React.useContext(AppContext);
  return (
    <div className='w-full border border-gray-300 shadow-md fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[450px] mx-auto py-2 items-center'>
       <div className='flex gap-x-2'>
         {  
          page > 1 &&
           (<button className='rounded-md border-2 border-gray-300 px-3 py-2 text-xs hover:bg-gray-100' onClick={()=> handlePageChange(page-1)}>
               Previous
           </button>)
        }
        {
          page < totalPages &&
           (<button className='rounded-md border-2 border-gray-300 px-3 py-2 text-xs hover:bg-gray-100' onClick={()=> handlePageChange(page+1)}>
                Next
           </button>)
        }
       </div>
       
        <p className='font-bold text-xs '>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination