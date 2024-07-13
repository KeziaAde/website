import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Views.css";

function Contact() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/contact/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="contactInfo">
      <h4>Coming soon!</h4>
      <p>For now, click any of the links in the footer.</p>
    </div>
  );
}

export default Contact;
