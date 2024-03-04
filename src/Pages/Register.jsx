import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/account")
  }
  return (
    <div>
      <div style={{ margin: "auto", width: "30%", marginTop: "50px" }}>
        <h1>Create an Account</h1>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "400",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Personal Information
        </p>
        <form action="" onSubmit={handleSubmit}>
          <label
            style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
            htmlFor=""
          >
            Name <br />
            <input
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id=""
              placeholder="Enter Name"
            />
          </label>
          <br />
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
              type="email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id=""
              placeholder="Enter Email"
            />
          </label>
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
              type="password"
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
            Create
          </button>
        </form>
        <Link to={"/"}>
          <p>or Return to store</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
