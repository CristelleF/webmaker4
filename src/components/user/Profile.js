import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Profile extends Component{
    render() {
        return(
    <div>
    <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
        <a to="profile.html"><i className="fas fa-check"></i></a>
    </nav>
        <div className="container">
      <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input placeholder="Enter your Username here..." className="form-control" type="text" id="username" name="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input placeholder="Enter your Email here..." className="form-control" type="email" id="email" name="email"/>
        <div className="form-group">
             <label htmlFor="firstName">First Name</label>
            <input placeholder="Enter your Firstname here..." className="form-control" type="text" id="firstName" name="firstName"/>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input placeholder="Enter your Last Name here..." className="form-control" type="text" id="lastName" name="lastName"/>
            </div>
            <Link className="btn btn-primary btn-block" to="/user/123/website">Websites</Link>
            <Link to="/user/123" className="btn btn-danger btn-block">Logout</Link>
</div>
</form>
</div>
<nav className="navbar navbar-dark bg-primary fixed-bottom">
    <span className="navbar-brand mb-0 h1"></span>
  <a to="profile.html"><i className="fas fa-user"></i></a>
</nav>
</div>

        )
    }
}