import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class PageEdit extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
        <a href="../website/website-list.html"><i className="fas fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">Edit Page</span>
        <a href="page-new.html"></span><i className="fas fa-check"></i> </a>
    </nav>
    <div className="container">
            <form>
                <div className="form-group">
                  
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input placeholder="Enter here..." className="form-control" type="text" id="name" name="name">
              <div className="form-group">
                   <label htmlFor="title">Title</label>
                  <input placeholder="Enter page tittle here..." className="form-control" type="text" id="title" name="title">
                  </div>
                  <a href="login.html" className="btn btn-danger btn-block">Delete</a>
      </form>
      </div>
      <nav className="navbar navbar-light bg-light fixed-bottom">
            <span className="navbar-brand mb-0 h1"></span>
            <a href="profile.html"><i className="fas fa-user text-primary"></i></a>
          </nav>
      </div>
    )
  }
}
