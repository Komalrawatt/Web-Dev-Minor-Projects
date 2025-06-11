import React from 'react'
import {useState} from 'react'
import {toast} from 'react-hot-toast';
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
const LoginForm = ({setIsLoggedIn}) => {
  const [FormData,setFormData]=useState({email:"",password:""})
  const [showPassword,setShowPassword]=useState(false)
 const navigate= useNavigate();
  function ChangeHandler(event) {

    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )

}
function submitHandler(event){
event.preventDefault();
setIsLoggedIn(true);
toast.success("Logged In");
console.log("Printing the formData");
console.log(FormData);
navigate("/dashboard");
}
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                  <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-800'>*</sup></p>
                  <input className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                   type="text"
                    required 
                    value={FormData.email}
                    name="email"
                    onChange={ChangeHandler}
                    placeholder='Enter Email Address'

                    />

            </label>
            <label className='w-full relative'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password<sup className='text-pink-800'> *</sup></p>
                  <input
                  className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                   type={showPassword? ("text"):("password")}
                  required 
                  value={FormData.password}
                  name="password"
                  onChange={ChangeHandler}
                  placeholder='Enter Password'
                  />
                  <span
                  className='absolute right-3 top-[38px] cursor-pointer text-slate-400 text-2xl'
                   onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword?(< AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                  </span>

                  <Link 
                
                  to="#">
                  <p className='text-blue-400 text-sm mt-1 w-full text-right'>   
                    Forget password?
                  </p>
                  </Link>
            </label>


        <button className='w-full bg-[#FFD60A] h-[35px] rounded-[8px] font-medium'>
          Sign in
        </button>
        </form>
  )
}

export default LoginForm