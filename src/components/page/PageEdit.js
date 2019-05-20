import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Axios from "axios";
import { async } from 'q';
export default class PageEdit extends Component {

  state = {
    uid: "",
    wid: "",
    pid: "",
    name: "",
    title: ""
}

async componentDidMount() {
    await this.setState({
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid,
        pid: this.props.match.params.pid
    }) 
    this.getPage();
}  
 getPage= async()=>{
    const res = await Axios.get(`/api/page/${this.state.pid}`);
    this.setState({
        name: res.data.name,
        title: res.data.title
    })

    this.getPage();
}

getPage = async () => {
    const res = await Axios.get(`/api/page/${this.state.pid}`);
    this.setState({
         name: res.data.name,
         title: res.data.title
     })
    }
onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onDelete =async () => {
    await Axios.delete(`/api/page${this.state.pid}`);
    this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
}

onSubmit = async e => {
    e.preventDefault();
    const newPage = {
        _id: this.state.pid,
        name: this.state.name,
        websiteId: this.state.wid,
        title: this.state.title
    }
    await Axios.put("/api/page", newPage);
    this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
}
  render() {
    const {uid,wid,name,title}= this.state
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
        <Link className="color-black" to={`/user/${uid}/website/${wid}/page`}><i className="fas fa-chevron-left"/></Link>
        <span className="navbar-brand">Edit Page</span>

        <button className="color-black btn" form="editPageForm"><i className="fas fa-check"/></button>
    </nav>
    <div className="container">
            <form  id="editPageForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                 <label htmlFor="name">
                 <b>Name</b> 
                 </label>
                <input className="form-control"
                  type="text" id="name" name="name" value={name}
                  onChange={this.onChange}
                  placeholder="Name of then page..."/></div>
      <div className="form-group">
                   <label htmlFor="title"><b>Title</b>
                   </label>
                  <input placeholder="Enter page title here..." onChange={this.onChange}
                  className="form-control" type="text" id="title" name="title" value={title}/>
                  </div>
                  <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-danger btn-lg">Cancel</Link>
     <button
            type="button"
            onClick={this.onDelete}
            className="btn btn-lg btn-danger float-right"> Delete
        </button>
    </form>
</div>
<footer className="navbar navbar-light fixed-bottom bg-light">
<div className="full-width">
<Link className="color-black float-right"
      to={`/user/${uid}`}>
     <i className="fas fa-user" /></Link>
</div>
</footer>
</div>
);
}
}