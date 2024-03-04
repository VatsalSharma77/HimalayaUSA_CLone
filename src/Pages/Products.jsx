import  { useEffect, useState } from "react";
import ProductCard from "../Components/Navbar/ProductCard";

import axios from "axios";
const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData()
  },[])
  async function fetchData() {
    setIsLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/data`,
      })
      setData(res.data);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }
  return (
    <div>
      
      <p style={{ textAlign: "center",marginTop:"30px",fontSize:"40px",fontWeight:"400" }}>Products</p>

      <div style={{marginTop:"30px"}}>
        <div>
       
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1> 
        ):(
          <ProductCard data={data} />
        )}
      </div>
    </div>
  );
};

export default Products;
