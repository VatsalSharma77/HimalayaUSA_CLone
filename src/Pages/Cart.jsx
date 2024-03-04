import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    totalItems,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return isEmpty ? (
    <div
      style={{ textAlign: "center", marginTop: "150px", marginBottom: "150px" }}
    >
      <h1 style={{ fontSize: "40px" }}>Shopping cart is empty</h1>
      <p
        style={{
          color: "grey",
          marginBottom: "30px",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        You have no items in your shopping cart.
      </p>
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          border: "1px solid black",
          padding: "10px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Continue Shopping
      </Link>
    </div>
  ) : (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        Shopping Cart
      </h1>
      <hr />
      <div style={{ margin: "30px" }}>
        <table>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <IconButton
                      onClick={() => removeItem(item.id)}
                      style={{
                        cursor: "pointer",
                        padding: "10px",
                        border: "none",
                        background: "none",
                      }}
                      icon={
                        <DeleteIcon style={{ width: "30px", height: "30px" }} />
                      }
                    />
                  </td>
                  <td>
                    <img
                      style={{ marginLeft: "20px" }}
                      height={200}
                      width={200}
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <p
                      style={{
                        marginLeft: "20px",
                        fontSize: "30px",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        marginLeft: "40px",
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#A3B49B",
                      }}
                    >
                      ${item.price}
                    </p>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "50px",
                        backgroundColor: "#F8F8F8",
                        padding: "10px",
                        borderRadius: "30%",
                      }}
                    >
                      <button
                        style={{
                          marginRight: "10px",
                          padding: "5px 10px",
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <p style={{ marginRight: "10px", fontSize: "20px" }}>
                        {item.quantity}
                      </p>
                      <button
                        style={{
                          marginRight: "10px",
                          padding: "5px 10px",
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <p
                      style={{
                        marginLeft: "40px",
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#A3B49B",
                      }}
                    >
                      ${item.price * item.quantity}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <Link
          style={{ textDecoration: "none", fontSize: "20px", color: "grey" }}
          to={"/products"}
        >
          {" "}
          Continue Shopping
        </Link>
        <div>
          <button
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "none",
              backgroundColor: "white",
              fontSize: "20px",
              color: "black",
            }}
            onClick={emptyCart}
          >
            <DeleteIcon style={{ width: "30px", height: "20px" }} />
            Clear Shopping Cart
          </button>
        </div>
      </div>
      <div style={{border:"none",width:"40%",padding:"20px",marginLeft:"50%",color:"white",backgroundColor:"rgb(102,118,95)",textAlign:"center",marginBottom:"40px"}}>
        <h1>Total: ${cartTotal}</h1>
        <button style={{cursor:"pointer",width:"100%",padding:"10px",marginTop:"20px",marginBottom:"20px",color:"white",border:"none",background:"#A3B49B",fontWeight:"bold"}}>Procced to checkout</button>
      </div><hr />
      <p style={{ fontSize: "30px", fontWeight: "400", color: "grey",margin:"30px" }}>You May Be Interested in These Products</p>
    </div>
  );
};

export default Cart;
