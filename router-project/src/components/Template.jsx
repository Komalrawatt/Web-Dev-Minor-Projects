import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='flex max-w-[800px] w-11/12  py-12 mx-auto gap-x-20 gap-y-0 min-h-screen '>
            <div className='w-[1400px] max-w-11/12  ' >
                <h1
                 className='text-slate-200 font-semibold text-[1.875rem] loading[2.375]'>
                    {title}</h1>
                <p className='text-[1rem] leading-[1.625rem] mt-4'>
                    <span className='text-slate-200'>{desc1}</span>
                    <br />
                    <span className='text-blue-400 italic'>{desc2}</span>

                </p>
               
                {
                    formType==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] bg-slate-800 w-full'></div>
                    <p className='text-slate-800 font-medium leading[1.375rem] text-[9px]'>OR</p>
                    <div className='h-[1px] bg-slate-800 w-full '></div>
                </div>
                <button className='flex  h-[30px] w-full items-center justify-center rounded-[8px] font-medium text-slate-100 border border-slate-800 px-[12px] py-[80x] mt-6 gap-x-2'>
                    <FcGoogle />
                    <p>Sign in with google</p>
                </button>
            </div>
            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frameImage} alt="patterns" width={558} height={504} loading='lazy'/>

                <img src={image}
                 alt="patters" 
                 width={558} 
                 height={490} 
                 loading='lazy'
                 className='absolute -top-4 right-4'
                 />
            </div>
    </div>
  ) 
}

export default Template ;