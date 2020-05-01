import React from 'react';
import axios from "axios";
import Main from './Main.jsx';
import Prepare from './Prepare.jsx';
import InterviewQuestions from './InterviewQuestions.jsx';
import Contact from './Contact.jsx';
import Login from './admin/Login.jsx';
import Admin from './admin/Admin.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }




  render() {
    return (
      <div>

      <Main/>

      </div>
    )
  }
}
export default App

