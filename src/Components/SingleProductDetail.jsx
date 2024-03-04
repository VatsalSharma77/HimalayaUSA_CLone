import React from "react";
import { useCart } from "react-use-cart";

const SingleProductDetail = ({ data }) => {
  const {addItem} = useCart()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "50px",
      }}
    >
      <img
        style={{ width: "50%" }}
        src={data.image}
        alt={data.title}
      />
      <div
        style={{ marginLeft: "100px",  width: "50%" }}
      >
        <h1 style={{ fontSize: "40px" }}>{data.title}</h1>
        <h3 style={{ fontSize: "30px" }}>${data.price}</h3>
        
        <button onClick={() => addItem(data)} style={{cursor:"pointer", marginTop: "20px" ,width:"50%",padding:"10px",marginBottom:"20px",color:"white",border:"none",background:"#A3B49B",fontWeight:"bold"}}>Add to Cart</button>
        <p style={{ fontSize: "20px", marginTop: "50px", lineHeight: "30px" }}>
          
          {data.body}
        </p>
        <h3 style={{ marginTop: "20px", fontSize: "20px" }}>Suggested Use</h3>
        <p style={{ marginTop: "20px", fontSize: "20px" }}>{data.Use}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"20px",margin:"30px"}}>
          <div>
            <img src="src\Components\spd_logo_1.jpg" alt="Gluten Free" />
            <h4>Gluten Free</h4>
          </div>
          <div>
            <img src="src\Components\spd_logo_2.jpg" alt="Vegan" />
            <h4>Vegan</h4>
          </div>
          <div>
            <img src="src\Components\spd_logo_3.jpg" alt="Soy Free" />
            <h4>Soy Free</h4>
          </div>
          <div>
            <img src="src\Components\spd_logo_4.jpg" alt="Dairy Free" />
            <h4>Dairy Free</h4>
          </div>
          <div>
            <img src="src\Components\spd_logo_5.jpg" alt="Corn Free" />
            <h4>Corn Free</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
