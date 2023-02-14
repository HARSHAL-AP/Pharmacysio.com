import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import "./pstyle.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import { getProduct } from "../../../Redux/Productreducer/action";
import { Singleitem1 } from "../../../Components/Productpage/Singleitem1";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Button } from "@chakra-ui/react";

export const Sexualwellness = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const product = useSelector((store) => store.Productreducer.products);
  const [page, setpage] = useState(1);
  useEffect(() => {
    if (location || product.length === 0) {
      const getProductParams = {
        parmas: {
          page: page,
          sort: searchParams.get("sort"),
          price: searchParams.get("price"),
        },
        category: "sexual_wellness",
      };
      dispatch(getProduct(getProductParams));
    }
  }, [dispatch, location.search, product.length, searchParams, page]);

  return (
    <>
      <Navbar />
      <h1 className="mainheadingofpage">Sexual Wellness</h1>
      <div className="mainbody">
        <Filter />
        <div className="probody">
          {product &&
            product.map((el, index) => {
              return <Singleitem1 key={index} obj={el} />;
            })}
        </div>
      </div>
      <div className="paginati">
        <Button
          isDisabled={page === 1 ? true : false}
          onClick={() => setpage(page - 1)}
        >
          Previous
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setpage(page + 1)}>Next</Button>
      </div>
      <Fotter />
    </>
  );
};
