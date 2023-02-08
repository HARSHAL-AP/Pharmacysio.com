import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./pstyle.css"
export const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [price, setprice] = useState(searchParams.get("price") || "");
    const [category, setCategory] = useState(searchParams.getAll("genre") || []);
    const handleFilter = (e) => {
        const option = e.target.value;
        
    
        let newCategory = [...category];
        if (newCategory.includes(option)) {
          
          newCategory.splice(newCategory.indexOf(option), 1);
        } else {
          
          newCategory.push(option);
        }
        setCategory(newCategory);
      };
    
      const handleSortBy = (e) => {
        setprice(e.target.value);
      };
    
      useEffect(() => {
        const params = {};
        category && (params.category = category);
        price && (params.price = price);
        setSearchParams(params);
      }, [category, setSearchParams, price]);



  return (
    <div className="filbody">
          <div className="filcatebody">
            <h1 className="fillcatheadin12">Sort By</h1>
            <div className="fillin876" onChange={handleSortBy}>
              <div>
                <p>Discount</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Price Low to high</p>
                <input type="checkbox"
            
            name="price"
            defaultChecked={price === "price_low_to_high"} value="price_low_to_high"/>
              </div>
              <div>
                <p>Price high to Low</p>
                <input type="Checkbox" value="price_high_to_low"/>
              </div>
             
            </div>
          </div>

          <div className="filcatebody">
            <h1 className="fillcatheadin12">Price</h1>
            <div className="fillin876">
              <div>
                <p>Below 99</p>
                <input type="Checkbox" value="below-99"/>
              </div>
              <div>
                <p>Below 200</p>
                <input type="Checkbox" value="below-200" />
              </div>
              <div>
                <p>Below 300</p>
                <input type="Checkbox" value="below-300"/>
              </div>
              <div>
                <p>Below 400</p>
                <input type="Checkbox" value="below-400"/>
              </div>
              <div>
                <p>Below 500</p>
                <input type="Checkbox" value="below-500"/>
              </div>
            </div>
          </div>
        </div>
  )
}
