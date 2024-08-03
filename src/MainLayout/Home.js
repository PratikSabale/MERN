import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); //it is used to navigate pages

  function About() {
    navigate("/about");
  }
  const name = "Pratik";
  return (
    <div>
      <div>Home</div>
      <div className="grid grid-cols-2 gap-5 px-10 py-10">
        <div className="border border-gray-900 rounded-full hover bg-cyan-500">
          <button type="button" onClick={About}>
            About
          </button>
        </div>
        <div className="border border-gray-900 rounded-full hover bg-cyan-500">
          <Link to={"/product"} state={name}>
            Products
          </Link>
        </div>
      </div>
    </div>  
  );
}

export default Home;
