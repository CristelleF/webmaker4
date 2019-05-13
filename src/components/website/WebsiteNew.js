import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WebsiteNew extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-dark bg-primary fixed-top row">
<Link to={`/user/${this.state.uid}`}>
    <i className="fas fa-chevron-left"></i>
    </Link>
<div className="col-lg-4 d-none d-sm-block">
    <Link className="color-white" to={`/user/:uid/website`}><i className="fas fa-chevron-left"></i>
    </Link> 

    <div>
    <h5 className="display-inline">Websites</h5>
    <Link className="float-right pt-2" to={`/user/${uid}/website/new`}><i className="fas fa-plus"></i></Link>
</div>
<div className="col-lg-8">
    <Link className="d-lg-none" to={`/user/:uid/website`}><i className="fas fa-chevron-left"></i></Link>
    <span className="navbar-brand mb-0 h1">New Website</span>
    <Link to={`/user/123/website`} className="float-right"><i className="fas fa-check"></i></Link>
</div>
    </nav>    
<section className="row">
<div className="col-lg-4 d-none d-lg-block">
<div className="container">
    <ul className="list-group">
    <li className="list-group-item">
        <Link to={`/user/${uid}/website`}> Address Book App</Link>
        <Link className="float-right" to={`/user/:uid/website/`}><i className="fas fa-cog"></i></Link>
    </li>
    <li className="list-group-item">
        <Link to={`/user/:uid/website/`}> Blogger</Link>
        <Link className="float-right" to={`/user/:uid/website/`}><i className="fas fa-cog"></i></Link>
    </li>
    <li className="list-group-item">
        <Link to={`/user/:uid/website/`}> Blogging App</Link>
        <Link className="float-right" to={`/user/:uid/website/`}><i className="fas fa-cog"></i></Link>
    </li>
    <li className="list-group-item">
        <Link to={`/user/:uid/website/`}> Script Testing App</Link>
        <Link className="float-right" to={`/user/:uid/website/`}><i className="fas fa-cog"></i></Link>
    </li>
    </ul>  
</div>
</div>
<div className="col-lg-8">
<div className="container">
    <form>
    <div className="form-group">
    <label htmlFor="name">Name</label> 
    <input placeholder="Enter website name..." className="form-control" type="text"/></label>
</div>
<div className="form-group">
    <label htmlFor="description">Discription</label>
    <textarea rows="5" placeholder="Enter website description..." className="form-control" id="description" name="description"></textarea>
</div>
</form>
</div>
</section>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
    <span className="navbar-brand mb-0 h1"></span>
    <Link to={"/user"}><i className="fas fa-user"></i></Link>
    </nav>
</div>
    
  }
}
