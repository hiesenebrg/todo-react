import React, { useEffect, useState } from "react";
import Form from "../component/Form";
import Data from "../component/Data";
import { useSelector } from "react-redux";

const Home = () => {
  const alldata = useSelector((state)=>state.articles);
  console.log(alldata);

  return (
    <div>
      <Form  />
      {console.log(alldata)}
      {alldata.map((data , index) => (
     
        <Data data={data} index={index}  />
      ))}
    </div>
  );
};

export default Home;
