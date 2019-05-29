import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WidgetHeading extends Component {
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
    const {uid, wid, pid, name, text, size} = this.props
    return (
      <div>
       <nav className="navbar navbar-light bg-light fixed-top">
        <Link className="color-black" to={`/user/${uid}/website/${wid}/page/${pid}/widget`}> <i className="fas fa-chevron-left"/></Link>
        <span className="navbar-brand">Widget Edit</span>
        <button className="color-black btn" form="headingForm"><i className="fas fa-check"/> </button>
    </nav>
    <div className="container">
<form id="headingForm" onSubmit={this.onSubmit}>
    <div className="form-group">
        <label htmlFor="name"><b>Name</b></label>
        <input placeholder="Enter here..." 
         value={name} className="form-control"
        type="text" id="name" name="name"/>
    </div>
 <div className="form-group">
        <label htmlFor="title">
        <b>Text</b></label>
        <input placeholder="Enter here..." className="form-control" 
        onChange={this.onChange}
        value={text}type="text" id="text" name="text"/>
     </div>
 <div className="form-group">
        <label htmlFor="title">
        <b>Size</b></label>
        <input placeholder="Enter here..." className="form-control" 
        value={size} onChange={this.onChange}
        type="number" id="text" name="size"/>
     </div>
        <button type="button"  onClick={this.onDelete} 
        className="btn btn-danger btn-block">Delete</button>
</form>
      </div>
      <footer className="navbar navbar-light fixed-bottom bg-light">
<div className="full-width">
    <Link
        className="color-black float-right"
        to={`/user/${uid}`}
    >
        <i className="fas fa-user" />
    </Link>
</div>
</footer>
</div>
    );
  }
}
