import {useState} from 'react';
import './App.css'

function App() {
const[formData,setFormData]=useState({firstname:""
  ,lastname:""
 , email:""
  ,country:""
  ,address:""
  ,city:""
  ,state:""
  ,code:""
  ,check: {
    comments: false,
    candidates: false,
    offers: false,
  },
  radiobutton:""
})

function changeHandler(event) {
  const { name, value, checked, type } = event.target;

  setFormData((prevData) => {
    if (type === "checkbox") {
      return {
        ...prevData,
        check: {
          ...prevData.check,
          [name]: checked,
        },
      };
    } else {
      return {
        ...prevData,
        [name]: value,
      };
    }
  });
}




function submitHandler(event){
  event.preventDefault();
  console.log(formData);
  
}
  return (
    <div className='flex flex-col justify-center items-center '>
  <div  className='w-[60vw] min-h-[100vh]  shadow-lg flex p-6 ' >
    <form onSubmit={submitHandler} >
      <label htmlFor="firstname" className='font-bold '>First name</label><br />
      <input className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none ' type="text" name="firstname" placeholder='Enter your first name' value={formData.firstname} onChange={changeHandler}/> <br />

      <label htmlFor="lastname" className='font-bold'>Last name name</label><br />
      <input className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none '  type="text" name="lastname" placeholder='Enter your last name' value={formData.lastname} onChange={changeHandler} /><br />

      <label htmlFor="email" className='font-bold'>Email address</label><br />
      <input  className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none ' type="email" name="email" placeholder='Enter your Email' value={formData.email} onChange={changeHandler} /><br />

    <label htmlFor="country" className='font-bold'>Country</label><br />
    <select className=' border border-blue-400 focus:border-blue-700 hover:border-2  h-[30px] w-[55vw] rounded outline-none '  name="country"   id="country" value={formData.country} onChange={changeHandler} >
      <option className='font-bold' value="india">India</option>
      <option className='font-bold' value="china">China</option>
      <option  className='font-bold'value="japan">Japan</option>
      <option className='font-bold' value="pakistan">Pakistan</option>

    </select><br />

      <label className='font-bold'htmlFor="">Street address</label><br />
      <input className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none '  type="text" name="address"  placeholder='Enter Street Address'  value={formData.address} onChange={changeHandler} /><br />

      <label className='font-bold'htmlFor="">City</label><br />
      <input className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none ' type="text" name="city" placeholder='Enter your city '  value={formData.city}onChange={changeHandler}  /><br />

      <label className='font-bold'htmlFor="">State/Province</label><br />
      <input  className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none ' type="text" name="state" placeholder='Enter State ' value={formData.state} onChange={changeHandler}  /><br />
      
      <label className='font-bold mt-2' htmlFor="">ZIP/Poster code</label><br />
      <input className=' border border-blue-400 focus:border-blue-700 hover:border-2 p-2 h-[30px] w-[55vw] rounded outline-none ' type="text" name="code" placeholder='Enter ZIP / Poster code '  value={formData.code} onChange={changeHandler}  /><br />
    <label className='font-bold  'htmlFor="">By Email</label>
    <br /><br />
    <input  type="checkbox" name="comments" onChange={changeHandler}  id="comments" checked={formData.check.comments}/>
    <label className='font-bold pl-1.5' htmlFor="comments">Comments</label>
    <p className='text-slate-600 text-sm pl-4'>Get notified when someones posts a comment on a posting.</p>
    <br />
    <input type="checkbox" name="candidates"  onChange={changeHandler}  id='candidates' checked={formData.check.candidates} />
    <label  className='font-bold  pl-1.5'htmlFor="candidates">Candidates</label>
   <p className='text-slate-600 text-sm pl-4'>Get notified when a candidae applies for a job.</p> 
   <br />
   <input type="checkbox" name="offers" onChange={changeHandler}  id='offers'checked={formData.check.offers} />
    <label className='font-bold  pl-1.5' htmlFor="offers">Offers</label>
    <p className='text-slate-600 text-sm pl-4'>Get notified when a candidate accepts or rejects an offer.</p>
    <br />

    <p className='font-bold'>Push Notifications</p>
    <p className='text-slate-600 text-sm mb-3.5'>These are delivered via SMS to your mobile phone.</p>
  <input type="radio" name="radiobutton" onChange={changeHandler} id='everything'  value='everything'/>
  <label className=' text-slate-800 text-sm font-semibold m-2' htmlFor="everything">Everything</label>
  <br />
  <input type="radio"name="radiobutton"onChange={changeHandler} id='emails' value='emails'/>
  <label className=' text-slate-800 text-sm font-semibold m-2 '  htmlFor="emails ">Same as email</label>
  <br />
  <input type="radio"name="radiobutton"onChange={changeHandler} id='notifications' value='notifications'/>
  <label className=' text-slate-800 text-sm font-semibold m-2' htmlFor="notifications">No push Notifications</label>
  <br />
  <button className='bg-blue-500 h-[35px] w-[55px] rounded mb-10 mt-5 text-white mx-auto' >Save</button>
    </form>
  </div>
  </div>
  )
}

export default App
