import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      siteLogo: 'https://mockwebsite-cda.s3-us-west-1.amazonaws.com/site-logo.png'

    }

    this.toggleMenu = this.toggleMenu.bind(this);

  }


  componentDidMount(){
    axios.get(`/images`).then((data) => {
      console.log('data from getting all setlists', data.data)
      this.setState({
        siteLogo: data.data[data.length]
      })
    })
  .catch((err) => {
    console.log('error submitting setlist entry: ', err);
  });


  }

  toggleMenu(){
    var menuBox = document.getElementById('nwrap');

    if(this.state.showMenu === false){
      menuBox.style.display = "block";
      this.setState({
        showMenu: true
      })
    } else if (this.state.showMenu === true){
      menuBox.style.display = "none";
      this.setState({
        showMenu: false
      })
    }
  }





  render() {

    if (this.state.showMenu === true){
      return (

        <div id="wrapper">
              <div id="hwrap">
              <header className="navbar navbar-default navbar-inverse navbar-fixed-topmobileb" role="navigation" style={{

              }}>
              <div id="headwrap">

                  <div id="titlelogo">
                      <a href="http://cdainterview.com/">
                      <div id="logo"><img src="https://mockwebsite-cda.s3-us-west-1.amazonaws.com/site-logo.png" width="167" height="100" alt="Site logo"/></div>
                      <h1></h1>
                      </a>

                      <h2></h2>
                  </div>
                  <div id="mwrap" onClick={this.toggleMenu}>
							<div id="lt" ></div>
							<div id="lm" style={{
                      zIndex:"-1", position:"relative"
                    }}></div>
							<div id="lb" style={{
                      zIndex:"-1", position:"relative"
                    }}></div>
						</div>


              <div id="nwrap">
              <div id="menuBtn" className="show"></div>
        <nav className="show navb"><ul className="navigation">        <li id="current"><Link to="/" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>Main</Link></li><li>        <Link to="/how-to-prepare-for-cda-interview" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>How To Prepare</Link></li><li> <Link to="/sample-cda-interview-questions" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>CDA Interview Questions</Link></li><li> <Link to="/contact-us" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>Contact Us</Link></li></ul></nav></div>

        </div>
        </header>
        <div className="banner video_banner">
					<div id="feature" className="bghide">
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
          </div></div></div>
      )
    } else {
    return (

<div id="wrapper">
      <div id="hwrap">
			<header className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
			<div id="headwrap">

					<div id="titlelogo">
							<a href="http://cdainterview.com/"/>
							<div id="logo"><img src="https://mockwebsite-cda.s3-us-west-1.amazonaws.com/site-logo.png" width="167" height="100" alt="Site logo"/></div>
							<h1></h1>
							<h2></h2>
					</div>
          <div id="mwrap" onClick={this.toggleMenu}>
							<div id="lt"  style={{
                      zIndex:"-1", position:"relative"
                    }}></div>
							<div id="lm"  style={{
                      zIndex:"-1", position:"relative"
                    }}></div>
							<div id="lb"  style={{
                      zIndex:"-1", position:"relative"
                    }}></div>
						</div>

            </div>

 </header>
        </div>

              <div id="nwrap">
              <div id="menuBtn"></div>
        <nav className="hide-nav"><ul className="navigation"><li id="current"><Link to="/" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>Main</Link></li><li>        <Link to="/how-to-prepare-for-cda-interview" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>How To Prepare</Link></li><li> <Link to="/sample-cda-interview-questions" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>CDA Interview Questions</Link></li><li> <Link to="/contact-us" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#000000"
      }}>Contact Us</Link></li></ul></nav></div>
        </div>



    )
  }
}
}



export default Navbar;

