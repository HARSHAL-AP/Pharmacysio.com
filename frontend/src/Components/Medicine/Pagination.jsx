import { Button } from "@chakra-ui/react";
import React,{useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import "./Pagination.css";

export const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
const [page,setpage]=useState(searchParams.get("page")||1)

useEffect(()=>{
const params={}
  page&&(params.page=page)
  setSearchParams(params)
},[setSearchParams,page])





  return (
    <div className="paginati">
      <Button isDisabled={page===1?true:false} onClick={()=>setpage(page-1)}>Previous</Button>
      <Button>{page}</Button>
      <Button onClick={()=>setpage(page+1)}>Next</Button>
    </div>
  );
};
