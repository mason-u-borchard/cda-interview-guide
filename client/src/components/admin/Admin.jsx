import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import Login from './Login.jsx'
import axios from 'axios';



class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.uploadFile = this.uploadFile.bind(this);

  }

  uploadFile(event) {
    const file = event.target.files[0]
    axios.post('/images', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
}



  render() {
    return (
      <div>

<head>

<meta id="no-index" name="robots" content="noindex"></meta>
</head>


<div className="grid-container">

  <div className="item sidebar"></div>
  <div className="item hdr-grid"><Navbar/></div>
  <div className="item content-2">    <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}><Link to="/login" style={{
        marginTop: "500px",
        marginBottom: "500px",
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}><Login/></Link> </div>
      </div></div>
  <div className="item content-3">
  <form id="uploadForm" enctype="multipart/form-data" onSubmit={this.uploadFile}>
<input type="file" id="file" name="file"/>
</form>


  </div>
  <div className="item footer-grid">  <Footer/></div>
  <div className="item hdr"></div>
</div>









    )
  }
}


export default Admin;
