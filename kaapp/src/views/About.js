import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Views.css";

function About() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/aboutme/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="aboutMeContainer">
      <div className="aboutMe">
        <h4>A little about me</h4>
        <p>
          I'm currently based in Düsseldorf and loving the (food) scene here.
          With a background in Industrial Engineering and Management from
          Constructor University, I've ventured into various roles across
          Germany and the US, honing my skills in Software Development,
          operations Management and IT Administration.
        </p>
        <p>
          Fun Facts:
          <ul className="aboutMeList">
            <li className="aboutMeList">
              <p>
                Languages: I'm fluent in English, Yoruba and German, and
                dabbling in Mandarin, and Igbo.
              </p>
            </li>
            <li className="aboutMeList">
              <p>Currently reading What Now? by Yael Shy</p>
            </li>
            <li className="aboutMeList">
              <p>
                Currently listening to <a href="https://open.spotify.com/album/2vXLt5PVNMD6c6sUgvKN69?si=rS3DGCIBRg-bcYLcX7CfMA&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F2vXLt5PVNMD6c6sUgvKN69%3Fsi%3DrS3DGCIBRg-bcYLcX7CfMA&feature=organic&_branch_match_id=1339678313935774836&_branch_referrer=H4sIAAAAAAAAA7WN3QqCMACFn2bepbTVokDCFCPSiKKwq5jzb7i2sR%2Bht0%2BDHiE4cOB8fJzOWmU2QWCUtKx5%2B0QpnzPRB1ulZeWoDaWqhQfgonGcP53mYTcpAEUApmMm7P9sKl%2FjRHjppoZDkdnl%2BX7KE0yxubXD8YTXAKWGAZToK0r28WF3aWclfWS0WMVNHn2fCOclof3%2F3wDEohrp3GtqYp2uQ6lbIhj9AJ76W4AXAQAA">Sunday at Zuri's</a>
              </p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default About;
