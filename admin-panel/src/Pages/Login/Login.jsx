import React,{useState,useEffect} from 'react'
import "./Login.css"
import Logo from "../../Images/Logo.png"
import { Button } from '@chakra-ui/react'
import loginimg from "../../Images/loginimg.jpg"

export const Login = () => {
  const[admin,setadmin]=useState({
     email:"",
     password:""

  })
 const handlesubmit=()=>{
console.log(admin)

 }

  return (
   <>
   <div className='context'>
    <div className='loginconter'>
     <img src={Logo} alt="" className='logimg'/>
     <h1 className='logheading'>Login to Pharmacysio Admin</h1>

     <div className='logindiv'>
     <input type="email" placeholder='Email' value={admin.email} className='loginput' onChange={(e)=>setadmin({...admin,email:e.target.value})}/>
     <input type="password"  placeholder='Password' value={admin.password} className='loginput' onChange={(e)=>setadmin({...admin,password:e.target.value})}/>
     </div>
    <div className='loginbtn' onClick={handlesubmit}>Login</div>
    <img src={loginimg} alt="" />
    </div>

        




   </div>

  
   
   <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
   
   
   </>
  )
}
