import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./pstyle.css";
export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSorty] = useState(searchParams.get("sort") || "");
  const [price,setprice]=useState(searchParams.get("price")||"")

const handleFilter=(e)=>{
setprice(e.target.value)
}
   

  const handleSort = (e) => {
    setSorty(e.target.value);
  };

  useEffect(() => {
    const params = {};
    
    sort && (params.sort = sort);
    price&& (params.price=price)
    setSearchParams(params);
  }, [ setSearchParams, sort,price]);

  return (
    <div className="filbody">
      <div className="filcatebody">
        <h1 className="fillcatheadin12">Sort By</h1>
        <div className="fillin876" onChange={handleSort}>
          <div>
            <p>Discount</p>
            <input type="Checkbox" />
          </div>
          <div>
            <p>Price Low to high</p>
            <input
              type="checkbox"
              value="price_low_to_high"
              name="sort"
              
            />
          </div>
          <div>
            <p>Price high to Low</p>
            <input
              type="Checkbox"
              value="price_high_to_low"
              name="sort"
              
            />
          </div>
        </div>
      </div>

      <div className="filcatebody">
        <h1 className="fillcatheadin12">Price</h1>
        <div className="fillin876" onChange={handleFilter}>
          <div>
            <p>Below 99</p>
            <input type="Checkbox" value="below-99" name="price" />
          </div>
          <div>
            <p>Below 200</p>
            <input type="Checkbox" value="below-200" name="price" />
          </div>
          <div>
            <p>Below 300</p>
            <input type="Checkbox" value="below-300" name="price" />
          </div>
          <div>
            <p>Below 400</p>
            <input type="Checkbox" value="below-400" name="price" />
          </div>
          <div>
            <p>Below 500</p>
            <input type="Checkbox" value="below-500" name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};
