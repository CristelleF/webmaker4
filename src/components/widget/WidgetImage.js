import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WidgetImage extends Component {
  onChange= e => {
    this.props.onChange(e);
}

onSubmit= e => {
    this.props.onSubmit(e)
}

onDelete = () => {
    this.props.onDelete();
}

render() {
    const {uid, wid, pid, name, width, url} = this.props  
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
    <Link className="color-black" to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
      <i className="fas fa-chevron-left"/>
      </Link>
      <span className="navbar-brand">Widget Edit</span>
      <button className="color-black btn" form="imgForm"><i className="fas fa-check"/>
      </button>
    </nav>
    <div className="container">
      <form id="imgForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">
          <b>Name</b></label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={this.onChange}
            value={name}
            className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="url">
          <b>Url</b></label>
          <input
            name="url" onChange={this.onChange} value={url}
            id="url" type="text"
            className="form-control"/>
            </div>
        <div className="form-group">
          <label htmlFor="width">
          <b>Width</b></label>
          <input className="form-control"  id="width"
           value={width} onChange={this.onChange} name="width" type="text"/>
            </div>
            <button  onClick={this.onDelete} type="button" 
            value={width} onChange={this.onChange}
            className="btn btn-danger btn-block">Delete</button>   
          </form>
          </div>
    <footer className="navbar navbar-light fixed-bottom bg-light">
      <div className="full-width">
          <Link className="float-right color-black" 
          to={`/user/${uid}`}>
          <i className="fas fa-user"/>
          </Link>
      </div>
  </footer>
      </div>
    );
  }
}
