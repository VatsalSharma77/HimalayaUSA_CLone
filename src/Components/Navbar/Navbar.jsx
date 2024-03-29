import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Input,InputGroup,Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const {totalItems} = useCart()
  return (
    <div className="navbar">
      <div className="left-nav">
        <Link style={{ textDecorationLine: "none" }} to="/"
        onClick={() => {
          setMenu("");
        }}>
          <img
            src="src\assets\Himalaya_Logo.avif"
            alt="himalaya-logo"
            width={150}
          />
        </Link>
        <Link
          style={{
            textDecorationLine: "none",
            height: "40px",
            color: "grey",
            fontSize: "22px",
          }}
          to="/products"
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu === "shop" ? <hr style={{
                border: "none",
                width: "100%",
                height: "5px",
                borderRadius: "10px",
                backgroundColor: "grey",
                marginTop: "20px",
              }} /> : <></>}
        </Link>
        <Link
          style={{
            textDecorationLine: "none",
            color: "grey",
            fontSize: "22px",
          }}
          to="/about"
          onClick={() => {
            setMenu("about");
          }}
        >
          About {menu === "about" ? <hr style={{
                border: "none",
                width: "100%",
                height: "5px",
                borderRadius: "10px",
                backgroundColor: "grey",
                marginTop: "20px",
              }}/> : <></>}
        </Link>
      </div>
      <div style={{ display: "flex", marginRight: "30px" }}>
       
            {menu==="shop" ? (<InputGroup marginRight={"10px"}>
              <Input
                width={"300px"}
                h={"40px"}
                placeholder="Search Your Product"
                border="1px solid black"
                borderRight={"none"}
              />
              <Button
                cursor={"pointer"}
                bg={"white"}
                borderLeft={"none"}
                h={"41px"}
                rightIcon={<Search2Icon h={"30px"} w={"30px"} color={"grey"} />}
                border="1px solid black"
                color="green.500"
              />
            </InputGroup>) : <></>}
          
        <Link
          style={{ textDecorationLine: "none" }}
          to="/account"
          onClick={() => {
            setMenu("account");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            id="account"
            width={45}
            height={45}
            style={{ marginRight: "10px" }}
          >
            <path fill="none" d="M0 0h48v48H0z"></path>
            <path fill="none" d="M7 7h33.9v33.9H7z"></path>
            <circle cx="24" cy="24" r="24" fill="none"></circle>
            <circle cx="24" cy="24" r="17" fill="none"></circle>
            <circle cx="24" cy="24" r="12" fill="none"></circle>
            <circle cx="24" cy="24" r="6" fill="none"></circle>
            <path
              fill="none"
              d="M48 0 0 48M0 0l48 48M12 0h24v48H12zM24 0v48"
            ></path>
            <path fill="none" d="M0 12h48v24H0zM0 24h48"></path>
            <path
              fill="#fff"
              d="M35.4 38.2c1 0 1.7-.9 1.6-2-.9-6.9-6.4-12.2-13-12.2s-12.1 5.3-13 12.2c-.1 1 .6 2 1.6 2h22.8z"
            ></path>
            <path
              fill="#231f20"
              d="M35.4 38.5H12.6c-.5 0-1-.2-1.4-.6-.4-.4-.6-1-.5-1.6.9-7.1 6.6-12.5 13.3-12.5 6.6 0 12.3 5.4 13.3 12.5.1.6-.1 1.2-.5 1.6-.4.3-.9.6-1.4.6zM24 24.3c-6.4 0-11.8 5.1-12.7 11.9-.1.4.1.9.4 1.2.3.3.6.4 1 .4h22.7c.4 0 .7-.2 1-.4.3-.3.4-.7.4-1.2-1-6.8-6.4-11.9-12.8-11.9z"
            ></path>
            <circle cx="24" cy="15.4" r="5.6" fill="#fff"></circle>
            <path
              fill="#231f20"
              d="M24 21.3c-3.3 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9 5.9 2.6 5.9 5.9-2.6 5.9-5.9 5.9zm0-11.2c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3z"
            ></path>
          </svg>
          {menu === "account" ? <hr style={{
                border: "none",
                width: "80%",
                height: "5px",
                borderRadius: "10px",
                backgroundColor: "grey",
                marginTop: "20px",
              }}/> : <></>}
        </Link>
        <Link
          style={{ textDecorationLine: "none" }}
          to="/cart"
          onClick={() => {
            setMenu("cart");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            id="shopping-bag"
            width={30}
            height={30}
            style={{ marginRight: "10px", marginTop: "7px" }}
          >
            <path
              d="M41.3 14.58a5 5 0 0 0-5-4.58H34a10 10 0 0 0-20 0h-2.32a5 5 0 0 0-5 4.58l-2.36 28a5 5 0 0 0 5 5.39h29.35a5 5 0 0 0 5-5.4ZM24 2a8 8 0 0 1 8 8H16a8 8 0 0 1 8-8Zm14.67 44H9.33a3 3 0 0 1-3-3.23l2.35-28a3 3 0 0 1 3-2.75H14v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1V12h16v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1v-6h2.32a3 3 0 0 1 3 2.75l2.35 28a3 3 0 0 1-3 3.25Z"
              data-name="Shopping Bag"
            ></path>
          </svg>
          {menu === "cart" ? (
            <hr
              style={{
                border: "none",
                width: "80%",
                height: "5px",
                borderRadius: "10px",
                backgroundColor: "grey",
                marginTop: "20px",
              }}
            />
          ) : (
            <></>
          )}
          <div className="navbar-cart-count">{totalItems}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
