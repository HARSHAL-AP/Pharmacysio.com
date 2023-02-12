import React from 'react'
import {Navbar} from "../../Components/Navbar/Navbar"
import {Fotter} from "../../Components/Fotter/Fotter"
import "./Acount.css"
import {AiOutlineUser} from "react-icons/ai"
import { useDispatch,useSelector } from "react-redux/es/exports";



export const Acount = () => {
const user=useSelector(store=>store.Authreducer.userdata)
console.log(user)

  return (
    <>
    <Navbar/>
    <div className='acbocy'>
      <div className='linksac'>
         <div className='accontener'>
         <AiOutlineUser className="usercon"/>
         <div className='userinfo'>
         <h1>{user.first_name+" "+user.last_name}</h1>
         <p>apsundeharshal129@gmail.com</p>
         <p>+91-{user.phone_number} </p>
         <button className='logoutbtn' >Logout</button>
         </div>
        

         </div>
         <div >



         </div>
      </div>
    <div className='dashboards'>

    </div>
    </div>

    <Fotter/>
    </>
   
  )
}
