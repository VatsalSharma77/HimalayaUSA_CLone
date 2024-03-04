import React, { useContext } from 'react'

import { Link, useNavigate } from "react-router-dom";
import { mycontext } from '../Context/AuthContext';
const Login = () => {
    const [input, setInput] = React.useState({
        email: "",
        password: "",
      });
      let {setIsAuth} = useContext(mycontext);
      const navigate = useNavigate()
      const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        if (input.email === user.email && input.password === user.password) {
          setIsAuth(true);
          localStorage.setItem("loggedin", true);
          navigate("/")
        }
        else{
          
          alert("Login Failed")
        }
      }
  return (
    <div style={{ margin: "auto", width: "30%", marginTop: "50px" }}>
      <h1>Already Registered?</h1>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "400",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Login
      </p>
      <form action="" onSubmit={handleLogin}>
        <label
          style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
          htmlFor=""
        >
          Email <br />
          <input
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            type="text"
            name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            id=""
            placeholder="Enter E-mail"
          />
        </label>
        <br />
        <label
          style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
          htmlFor=""
        >
          Password <br />
          <input
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            type="text"
            name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            
            id=""
            placeholder="Enter Password"
          />
        </label>
        <button
          type="submit"
          style={{
            cursor: "pointer",
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            color: "white",
            border: "none",
            background: "#A3B49B",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
      <p>Lost your password?</p>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "400",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        New Customer
      </p>
      <p>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>
      <Link to={"/register"}>
        <button
          style={{
            cursor: "pointer",
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            color: "white",
            border: "none",
            background: "#A3B49B",
            fontWeight: "bold",
          }}
        >
          Create an Account
        </button>
      </Link>
    </div>
  )
}

export default Login