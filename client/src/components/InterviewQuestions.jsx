import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

class InterviewQuestions extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }



  render() {
    return (
      <div>
      <Navbar/>
      Example Interview Questions
      <Footer/>
      </div>
    )
  }
}




export default InterviewQuestions