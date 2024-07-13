import React, { useState, useEffect } from "react";
import axios from "axios";
import main_logo from "../Logo/SVG/main-logo.svg";
import "./Views.css";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="homeDiv">
      <img className="homeLogo" src={main_logo} alt="logo"/>
      <div className="homeInfo">
        <h4>Welcome to My Digital Space!</h4>
        <p>I'm Kezia Adesanya, a software developer and administrator with a knack for transforming tech systems. I love creating scalable and secure digital solutions that optimize operations!</p>
        <p>With years of experience in development and operations, I'm now diving into the dynamic worlds of DevOps and Cybersecurity. Feel free to click around and don't hesitate to reach out!</p>
      </div>
    </div>
  );
}

export default Home;
