import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class PageList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
        <a href="../website/website-list.html"><i className="fas fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">Pages</span>
        <a href="page-new.html"><i className="fas fa-plus"></i></a>
    </nav>
    <div className="container">
        <ul className="list-group">
     <li className="list-group-item">
        <a href="../widget/widget-list.html">Blog Post</a>
        <a className="float-right" href="page-edit.html"><i className="fas fa-cog"></i></a>
    </li>
    <li className="list-group-item">
            <a href="../widget/widget-list.html">Blogs</a>
            <a className="float-right" href="page-edit.html"><i className="fas fa-cog"></i></a>
        </li>
    <li className="list-group-item">
    <a href="../widget/widget-list.html">Home</a>
    <a className="float-right" href="page-edit.html"><i className="fas fa-cog"></i></a>
        </li>
    <li className="list-group-item">
            <a href="../widget/widget-list.html">About</a>
            <a className="float-right" href="page-edit.html"><i className="fas fa-cog"></i></a>
        </li>
    <li className="list-group-item">
            <a href="../widget/widget-list.html">Contact Us</a>
            <a className="float-right" href="page-edit.html"><i className="fas fa-cog"></i></a>
        </li>
        </ul>
    </div>
    <nav className="navbar navbar-light fixed-bottom bg-light">
        <div className="full-width">
            <a className="float-right" href="../user/profile.html"><i className="fas fa-user text-primary"></i></a>
        </div>
    </nav>
      </div>
    )
  }
}
