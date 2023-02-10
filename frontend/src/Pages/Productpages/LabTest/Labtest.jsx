import React,{useState,useEffect} from 'react'
import "./Labtest.css"
import {Navbar} from "../../../Components/Navbar/Navbar"
import {Fotter} from "../../../Components/Fotter/Fotter"
import { LabCard } from '../../../Components/Labtest/LabCard'
import { useDispatch,useSelector } from "react-redux/es/exports";
import { getLabtests } from "../../../Redux/Productreducer/action";
export const Labtest = () => {
  const dispatch=useDispatch()
 
  const data=useSelector((store)=>store.Productreducer.labtest)
  useEffect(()=>{
    if(data.length===0){
    
     dispatch(getLabtests())
    }
       
   




   },[data.length])
  
console.log(data)
  return (
    <>
    <Navbar/>
     <h1 className='Labtestheading'>Lab Tests</h1>
     <div className='Selectlocbox'>
 Book your lab tests 
     </div>
     <h1 className='subhelat'>All Test</h1>
    <div className='alltests'>
    {data.map((el, index) => {
            return <LabCard key={index} elem={el} />;
          })}
      
    </div>
    <Fotter/>
    </>
    
  )
}
