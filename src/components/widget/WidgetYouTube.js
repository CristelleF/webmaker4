import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WidgetYouTube extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
      <a to="widget-list.html"><i className="fas fa-chevron-left"></i></a>
      <span className="navbar-brand mb-0 h1">Widget Edit</span>
      <a to="widget-list.html"><i className="fas fa-check"></i></a>
    </nav>
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            placeholder="Enter widget name here..."
            name="name"
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            placeholder="Enter text description of this image(optional)"
            className="form-control"
            type="text"
            name="text"
            id="text">

        </div>
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            placeholder="Enter image location here..." name="url" id="url" type="text"
            className="form-control">
        </div>
        <div className="form-group">
                <label htmlFor="width">Width</label>
                <div className="input-group">
                <input className="form-control"  placeholder="Image Width" type="number">
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                  </div>
                  </div>
                  </div>
            <a to="login.html" className="btn btn-danger btn-block">Delete</a>   
          </form>
    </div>
    <nav className="navbar navbar-light fixed-bottom bg-light">
      <div className="full-width">
          <a className="float-right" to="../user/profile.html"><i className="fas fa-user text-primary"></i></a>
      </div>
  </nav>
      </div>
    )
  }
}
