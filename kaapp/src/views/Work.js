import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Views.css";

function Work() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/work/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="workInfo">
      <h4>Get a closer look</h4>
      <a href="./Logo/Kezia_Adesanya - DevOps Engineer.pdf" download="KeziaAdesanyaCV">
        <button type="button">Download Kezia's resumé</button>
      </a>
    </div>
  );
}

export default Work;
