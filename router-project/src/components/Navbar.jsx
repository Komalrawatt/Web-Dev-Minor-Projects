import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
  let isLoggedin=props.isLoggedin;
  let setLoggedin=props.setLoggedin;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[800px] py-4 mx-auto'>
        <Link to="/">
              <img src={logo} alt='logo' height={32} width={160} loading='lazy'/>
        </Link>
        <nav>
                <ul className=' text-slate-400 flex gap-x-6'>
                        <li>
                        <Link to='/'>Home</Link>
                        </li>
                        <li>
                        <Link to='/'>About</Link>
                        </li>
                        <li>
                        <Link to='/'>Contact Us</Link>
                        </li>
                </ul>
        </nav>
        {/* Login...signup...logout...dashboard */}
        <div className='flex items-center gap-x-4'>
             { !isLoggedin &&
                <Link to='/login'>
                    <button className='bg-[#161D29] text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-[#2C333F] '>Login</button>
                </Link>
             }
             {
              !isLoggedin &&
                <Link to='/signup'>
                    <button className='bg-[#161D29] text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]' >Sign up</button>
                </Link>
             }
             {
              isLoggedin &&
                <Link to='/'>
                    <button className='bg-[#161D29] text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]' onClick={()=>{
                      setLoggedin(false)
                      toast.success("Logged Out")
                      }}>Log out</button>
                </Link>
             } 
             {
              isLoggedin &&
                <Link to='/Dashboard'>
                     <button className='bg-[#161D29] text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]'>Dashboard</button>
                </Link>
              }
              
        </div>
    </div>
  )
}

export default Navbar