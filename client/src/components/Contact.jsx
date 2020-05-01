import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noIndex: true
    }

  }


  render() {
    return (
      <div>
      <head>

      <meta id="no-index" name="robots" content="noindex"></meta>
      </head>
      <Navbar/>


				<div className="banner video_banner">
					<div id="feature" className="bghide"><img id="featureImg" src="http://cdainterview.com/resources/contact-us.png" style={{
            margin: "0",
            padding: "0",
            fontSize: "100%"
          }}/>
					<div id="extraContainer11">
						<div className="videoWrapper">
						</div>
					</div>
						<div id="extraContainer1">
						</div>
						<div className="banner-text">
						</div>
							<div id="extraContainer9"><div id="myExtraContent9">CDA Interview Guide</div></div>
					</div>
				</div>





<div className="message-text2" style={{
  textAlign: "CENTER",
  padding: "3.5%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
}}>
        <div  className="new-line3" style={{
          paddingLeft: "30px",
        textAlign: "left",
        font: "17px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", fontStretch: "expanded", color: "#373737",
        marginTop:"55px"
      }}>BeMo Academic Consulting Inc.</div>


<div className="new-line3" style={{
        paddingLeft: "30px",
        textAlign: "left",
        font: "13px Arial, Verdana, Helvetica, sans-serif", color: "#373737", fontWeight: "bold"
      }}> <u>Toll Free</u>: <span style={{
        font: "normal 14px/22px Arial, Helvetica, Geneva, sans-serif", color: "#373737"
      }}>1-855-900-BeMo (2366)</span> </div>


<div className="new-line3" style={{
        paddingLeft: "30px",
        textAlign: "left",
        font: "13px Arial, Verdana, Helvetica, sans-serif", color: "#373737", fontWeight: "bold"
      }}> <u>Email</u>: <span style={{
        font: "normal 14px/22px Arial, Helvetica, Geneva, sans-serif;", color: "#373737"
      }}>info@bemoacademicconsulting.com</span>
      </div>

      <label style={{ textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0",
    color: "#373737",
    padding: "0",
    border: "0",
    outline: "0",
    fontSize: "11.5px",
    background: "transparent"
      }}>Name: <span style={{     textTransform: "superscript"
      }}>*</span></label>


		<input className="form-input-field" style={{
    marginTop: "7px",
    marginLeft: "1cm",
    marginRight: "1cm",
    cursor: "text",
    resize: "auto",
    backgroundColor: "#CCCCCC",
    textColor: "rgb(51, 51, 51)",
    font: "400 11px system-ui",
    padding: "9px",
    whiteSpace: "pre-wrap",
    border: "none",
    outline: "none",
    }} type="text" value="" name="form[element0]" size="40"/>

		<label style={{ textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0",
    color: "#373737",
    padding: "0",
    border: "0",
    outline: "0",
    background: "transparent",
    fontSize: "11.5px",
      }}>Email Address:</label> <span style={{     textTransform: "superscript"
      }}>*</span>
		<input className="form-input-field" type="text" value="" name="form[element1]" size="40" style={{
    marginTop: "7px",
    marginLeft: "1cm",
    marginRight: "1cm",
    cursor: "text",
    resize: "auto",
    backgroundColor: "#CCCCCC",
    textColor: "rgb(51, 51, 51)",
    font: "400 11px system-ui",
    padding: "9px",
    whiteSpace: "pre-wrap",
    border: "none",
    outline: "none",
    }}/>

    <label style={{ textTransform: "uppercase",
    fontSize: "11.5px",
    letterSpacing: "1px",
    color: "#373737",
    margin: "0",
    padding: "0",
    border: "0",
    outline: "0",
    background: "transparent"
      }}>How can we help you?</label> <span style={{ textTransform: "superscript"
      }}>*</span>
		<textarea className="form-input-field" name="form[element2]" rows="8" cols="38" style={{
    marginTop: "7px",
    marginLeft: "1cm",
    marginRight: "1cm",
    cursor: "text",
    resize: "auto",
    backgroundColor: "#CCCCCC",
    textColor: "rgb(51, 51, 51)",
    font: "400 11px system-ui",
    padding: "9px",
    whiteSpace: "pre-wrap",
    border: "none",
    outline: "none",
    }}></textarea>

<input className="form-input-button" type="reset" name="resetButton" value="Reset" style={{
  background: "#999999",
  color: "color: #000066",
  padding: "7px 28px 7px 28px",
  margin: "25px 10px 60px 0",
    textTransform: "uppercase",
    fontSize: "0.75em",
    border: "none",
    cursor: "pointer"
}}></input>
<input className="form-input-button" type="submit" name="submitButton" value="Submit" style={{
  background: "#999999",
  color: "color: #000066",
  padding: "7px 28px 7px 28px",
  margin: "25px 10px 60px 0",
    textTransform: "uppercase",
    fontSize: "0.75em",
    border: "none",
    cursor: "pointer"
}}></input>

<div className="form-footer" style={{
  textAlign: "CENTER",
  color: "#373737",
  display: "block",
  font: "normal 14px/22px Arial, Helvetica, Geneva, sans-serif"

}}><div style={{fontSize:"15px", fontWeight:"bold" }}></div><div><u><strong>Note</strong></u>: If you are having difficulties with our contact us form above, send us an email to info@bemoacademicconsulting.com (copy &amp; paste the email address)</div><div style={{fontSize: "13px"}}></div></div>

      </div>
      <Footer/>
      </div>
    )
  }
}



export default Contact