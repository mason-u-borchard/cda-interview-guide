import React from 'react';
import { Link } from 'react-router-dom';
import Admin from "./admin/Admin.jsx";

const Footer = () => {




  return (
    <div>


<footer style={{
   padding:"2% 5% 5% 5%",
   backgroundColor:" #000066",
   margin: "0",
   display: "block",
   outline: "none"
}}>

<div id="footer" style={{
        font: "14px Arial, Verdana, Helvetica, sans-serif", color: "white",
        padding:"2% 5% 5% 5%",
        marginBottom: "0px"
      }}>©2013-2016 BeMo Academic Consulting Inc. All rights reserved. <a href="http://www.cdainterview.com/disclaimer-privacy-policy.html" target="_blank"><span style={{textDecoration: "underline", color: "#FF6600" }}>Disclaimer &amp; Privacy Policy <a href="mailto:info@bemoacademicconsulting.com" id="rw_email_contact"><span style={{textDecoration: "underline", color: "#FF6600" }}>Contact Us</span></a></span></a>
      <div id="logo"><img src="https://mockwebsite-cda.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-30+at+6.15.13+PM.png" width="60" height="35" alt="Site logo"/><span><span></span><strong><Link to="/login" style={{textDecoration: "underline", color: "#ffce07", cursor: "pointer" }}> Admin Panel </Link></strong></span></div>
</div>


</footer>
<a href="#" className="scrollup" style={{
  display: "inline"
}}>Scroll</a>
    </div>
  )

}




export default Footer;

