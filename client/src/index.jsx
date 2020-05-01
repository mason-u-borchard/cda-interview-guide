import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import Main from './components/Main.jsx';
import Prepare from './components/Prepare.jsx';
import InterviewQuestions from './components/InterviewQuestions.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Admin from './components/admin/Admin.jsx';
import Login from './components/admin/Login.jsx';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/how-to-prepare-for-cda-interview" component={Prepare} />
      <Route exact path="/sample-cda-interview-questions" component={InterviewQuestions} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/admin" component={Admin} />

        <Route exact path="/login" component={Login} />
    </div>
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);