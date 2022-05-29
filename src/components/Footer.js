// import { useState, useEffect } from "react";

function Footer(props) {

  const social= () => {
    window.location.href="https://www.linkedin.com/in/ashleymrichard1";
  }

  const git= () => {
    window.location.href = "https://github.com/amr745/express-and-react-lab-frontend";
  }
  return (
  <footer>
    <p>Created by Ashley M. Richard</p>
    <img className="social-link" src="https://imgur.com/8VOL4YY.png" alt="Linkedin Link" onClick={social}/>
    <img className="social-link" src="https://imgur.com/YTC2jT5.png"alt="Github Link" onClick={git}/>
  </footer>
  )
}

export default Footer;