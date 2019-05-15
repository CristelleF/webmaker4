import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WebsiteEdit extends Component {
        state = {
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            websites: [],
            name: "",
            description: ""
        };
    
        componentDidMount() {
            this.filterWebsites(this.props.websites);
            this.getWebsite(this.state.wid);
        }
    
        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps.match.params.wid !== this.props.match.params.wid) {
                this.getWebsite(this.props.match.params.wid);
            }
        }
    
        filterWebsites = websites => {
            const newWebsites = websites.filter(
                website => website.developerId === this.state.uid
            );
            this.setState({
                websites: newWebsites
            });
        };
    
        getWebsite = wid => {
            let currentWeb;
            for (let website of this.props.websites) {
                if (website._id === wid) {
                    currentWeb = website;
                    break;
                }
            }
            this.setState({
                name: currentWeb.name,
                description: currentWeb.description
            });
        };
    
        onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };
    
        delete = () => {
            this.props.deleteWeb(this.props.match.params.wid);
            this.props.history.push(`/user/${this.state.uid}/website`);
        };
    
        onSubmit = e => {
            e.preventDefault();
            this.props.editWeb(
                this.props.match.params.wid,
                this.state.name,
                this.state.description
            );
            this.props.history.push(`/user/${this.state.uid}/website`);
        };
    
        render() {
            const { uid } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-lg-4 d-none d-lg-block text-center text-white">
            <Link className="float-left" to="/user/:uid/website">
                <i className="fas fa-arrow-circle-left"/>
                </Link>
            <span className="">Websites</span>
            <Link className="float-right" to="/user/:uid/website/:wid/page/newl"><i className="fas fa-plus-square"/>
        </Link>
        </div>
        <div className="col-lg-8 text-center-white">
                <Link className="d-lg-none float-left" to="/user/:uid/website">
                <i className="fas fa-arrow-circle"/></Link>
                </div>
                </nav>
            <span className="">Edit Website</span>
            <Link to="/user/:uid/website" className="float-right"><i className="fas fa-check-circle"/></Link>
        </div>
        </nav>    
        <div className="row">
        <div className="col-lg-4 d-none d-sm-block">
            <div className="container-fluid">
        <ul className="list-group">
        {this.state.websites.map(website=>(<li key={website._id} className="list-group-item">
                <Link to={`/user/${uid}/website/${website._id}/page`}> Blogging App</Link>
                <i className="float-right" to="website-edit.html"><i className="fas fa-cog"/></Link>
            </li>
            <li className="list-group-item">
                <a to="../page/page-list.html"> Address Book App</a>
                <a className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></a>
            </li>
            <li className="list-group-item">
                <a to="../page/page-list.html"> Script Testing App</a>
                <a className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></a>
            </li>
            <li className="list-group-item">
                <a to="../page/page-list.html"> Blogger</a>
                <a className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></a>
            </li>
        </ul>  
        </div>
        </div>
        <div className="col-lg-8">
            <div className="container">
                <form>
                    <div className="form-group">
                    <label htmlFor="name">Name</label> 
                    <input placeholder="Enter website name..." className="form-control" type="text"></label>
            </div>
            <div className="form-group">
                <label htmlFor="description">Discription</label>
                <textarea rows="5" placeholder="Enter website description..." className="form-control" id="description" name="description"></textarea>
        </div>
        <a to="login.html" className="btn btn-danger btn-block">Delete</a>
            </form>
            </div>
        </section> 
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
                <span className="navbar-brand mb-0 h1"></span>
                <a to="profile.html"><i className="fas fa-user"></i></a>
              </nav>  
      </div>
    )
  }
}
