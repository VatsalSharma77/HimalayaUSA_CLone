import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const ProductCard = ({data}) => {
  const {addItem} = useCart()
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",margin:"30px"}}>
        {data && data.map((item)=>{
            return (
                <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",padding:"10px",alignItems:"center"}} key={item.id}>
                   <Link to={`/products/${item.id}`}>
                   <img height={200} style={{alignContent:"center"}} width={200} src={item.image} alt="" />
                   </Link>
                   <p style={{fontSize:"20px"}}>{item.title}</p>
                    <p style={{fontWeight:"bold",color:"grey",fontSize:"20px"}}>${item.price}</p>
                    <button style={{cursor:"pointer", marginTop: "20px" ,width:"100%",padding:"10px",marginBottom:"20px",color:"white",border:"none",background:"#A3B49B",fontWeight:"bold"}}
                    onClick={() => addItem(item)} 
                    >Add to Cart</button>
                </div>
            )
        })}
    </div>
  )
}

export default ProductCard