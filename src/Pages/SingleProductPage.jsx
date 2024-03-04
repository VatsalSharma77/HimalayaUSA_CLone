import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductDetail from "../Components/SingleProductDetail";
// import axios from "axios";
const SingleProductPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);
  async function fetchData() {
    setIsLoading(true);
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      let final = await res.json();
      setData(final);
      console.log(final);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : (
    <div>
      <SingleProductDetail data={data} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "50px",
          textAlign: "center",
          padding: "100px",
          marginTop: "100px",
          fontSize: "20px",
          backgroundColor: "#F7F7F7",
          borderRadius: "20px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <img src="src\assets\spd_logo_6.jpg" alt="logo6" />
          <h4>Free Shipping on $35</h4>
          <p>
            We've got you covered. Enjoy free shipping on us when you purchase
            over $35.
          </p>
        </div>
        <div>
          <img src="src\assets\spd_logo_7.jpg" alt="logo7" />
          <h4>60-Day Guarantee</h4>
          <p>
            100% satisfaction guaranteed if you're not satisfied, you can return
            the product any time within 60 days.
          </p>
        </div>
        <div>
          <img src="src\assets\spd_logo_8.jpg" alt="logo8" />
          <h4>Questions?</h4>
          <p>
            Let's get in touch! You can reach us at writetous@himalayausa.com
            and we're happy to help.
          </p>
        </div>
      </div >
      <div style={{ textAlign: "center", marginTop: "100px",margin:"50px" }}>
        <h1 style={{ textAlign: "center" }}>
          Our Commitment to WellnessRelated Products
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around",marginTop:"100px" }}>
        <div>
          <h4>Our Herbs</h4>
          <p>
            We focus on efficacy and batch-to-batch consistency for every
            product.
          </p>
        </div>
        <div>
          <h4>Sustainable</h4>
          <p>
            Our herbs are grown sustainably through fair trade farming
            partnerships with over 5,000 farmers.
          </p>
        </div>
        <div>
          <h4>Trusted</h4>
          <p>
            When it comes to natural herbal products used and trusted all over
            the world, it’s Himalaya since 1930.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
