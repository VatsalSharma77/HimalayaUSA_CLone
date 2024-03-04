import React, { useContext } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { mycontext } from "../Context/AuthContext";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loggedIn = JSON.parse(localStorage.getItem("loggedin"));
  let {setIsAuth} = useContext(mycontext);
  const navigate = useNavigate();
  function handleLogout(){
    setIsAuth(false);
    localStorage.removeItem("loggedin");
    navigate("/");
  }
  if (loggedIn) {
    return (
      <div style={{ margin: "auto", width: "50%", marginTop: "50px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Welcome - {user.name}</h1>
        <p style={{ textAlign: "center", marginBottom: "30px",fontSize:"20px" }}>Your Email - {user.email}</p>
        <button style={{cursor:"pointer", marginTop: "20px" ,width:"50%",padding:"10px",marginBottom:"20px",color:"white",border:"none",background:"#A3B49B",fontWeight:"bold"}}
        type="button"
        onClick={handleLogout}
        >Logout</button>
      </div>
    )
  }

  return(
    <Login/>
  )
};

export default Account;
