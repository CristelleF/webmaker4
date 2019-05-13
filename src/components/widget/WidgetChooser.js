import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WidgetChooser extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-light bg-light fixed-top">
      <a href="widget-list.html"><i className="fas fa-chevron-left"></i></a>
      <span className="navbar-brand mb-0 h1">Choose Widget</span>
      <span></span>
    </nav>
    <div className="container">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="widget-heading.html">Header</a>
        </li>
        <li className="list-group-item">
          <a href="#">Label</a>
        </li>
        <li className="list-group-item">
          <a href="#">HTML</a>
        </li>
        <li className="list-group-item">
          <a href="#">Text Input</a>
        </li>
        <li className="list-group-item">
          <a href="#">Link</a>
        </li>
        <li className="list-group-item">
          <a href="#">Button</a>
        </li>
        <li className="list-group-item">
          <a href="widget-image.html">Image</a>
        </li>
        <li className="list-group-item">
          <a href="widget-youtube.html">YouTube</a>
        </li>
        <li className="list-group-item">
          <a href="#">Data Table</a>
        </li>
        <li className="list-group-item">
          <a href="#">Repeater</a>
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
