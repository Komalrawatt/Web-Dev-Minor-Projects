import React, { useState } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function SignupForm({setIsLoggedIn}) {
  const[showPassword,setShowPassword]=useState(false);
  const[showPasswords,setShowPasswords]=useState(false);
  const [accountType, setAccountType] = useState("student");

  const[FormData,setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const navigate=useNavigate();
  function changeHandler(event) {
 
    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )
  }

  function submitHandler(event){
event.preventDefault();
if(FormData.password != FormData.confirmPassword){
  toast.success("Password Incorrect")
  return 
}
setIsLoggedIn(true);
toast.success("account created")
const accountData = {
  ...FormData
};
const finalData={...accountData,accountType}

console.log("Printing final Account details");

console.log(finalData);

navigate("/dashboard");
  }
  return (
    <div className='flex flex-col w-full '>
        {/* student & instructor tab */}
            <div className='flex bg-[#161D29] p-1 gap-x-1 my-6 rounded-full max-w-max'>
                    <button
                    className={`${accountType === "student" 
                      ?
                        "bg-[#000814] text-white"
                      :"bg-transparent text-slate-300"} py-2 px-5 rounded-full transition-all duration-200`}
                     onClick={()=> setAccountType("student")}>

                    Student</button>
                    <button
                    className={`${accountType === "instructor" 
                      ?
                        "bg-[#000814] text-white"
                      :"bg-transparent text-slate-300"} py-2 px-5 rounded-full transition-all duration-200`} 
                     onClick={() => setAccountType("instructor")}>
                    Instructor</button>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>

              <div className='flex gap-x-4'>
              <label htmlFor=""  className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-800'>*</sup></p>
                    <input 
                    className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                    type="text"
                    required
                    name="firstname"
                    onChange={changeHandler}
                    value={FormData.firstname}
                    placeholder='Enter First Name'
                    />
              </label>

              <label htmlFor="" className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-800'>*</sup></p>
                    <input 
                    className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                    type="text"
                    required
                    name="lastname"
                    onChange={changeHandler}
                    value={FormData.lastname}
                    placeholder='Enter Last Name'
                    />
              </label>
              </div>
             

              <label htmlFor="" className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-800'>*</sup></p>
                    <input 
                    className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                    type="email"
                    required
                    name="email"
                    onChange={changeHandler}
                    value={FormData.email}
                    placeholder='Enter Email Address'
                    />
              </label>
              {/* Create password and confirm password */}
              <div className='flex gap-x-4'>
              <label htmlFor="" className='w-full relative'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-800'>*</sup></p>
                    <input 
                    className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                    type={showPassword?("text"):("password")}
                    required
                    name="password"
                    onChange={changeHandler}
                    value={FormData.password}
                    placeholder='Create Password'
                    />

                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer text-slate-400 text-2xl'
                    onClick={()=> setShowPassword((prev)=>!prev)}>
                                        {showPassword?(< AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
              </label>

              <label htmlFor="" className='w-full relative'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-800'>*</sup></p>
                    <input 
                    className='w-full bg-[#161D29] rounded=[0.5rem] text-white p-[12px] border-[#161D29] border-b-1 border-b-slate-700  rounded-[10px] click:border-white click:border-1 '
                    type={showPasswords?("text"):("password")}
                    required
                    name="confirmPassword"
                    onChange={changeHandler}
                    value={FormData.confirmPassword}
                    placeholder='confirm Password'
                    />

                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer text-slate-400 text-2xl'
                    onClick={()=> setShowPasswords((prev)=>!prev)}>
                                        {showPasswords?(< AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
              </label>
              </div>
               
              <button className='w-full bg-[#FFD60A] h-[35px] rounded-[8px] font-medium'>
                Create Account
              </button>
            </form>
    </div>
  )
}

export default SignupForm;