import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
export default class Profile extends Component{
    state = {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        oldUsername:""
    }

async componentDidMount(){
        const uid = this.props.match.params.uid;
        const res = await axios.get(`/api/user/${uid}`);
        if(res.data){
            this.showUser(res.data);
        } else {
        alert("No user is found with given id");
    }
}
    showUser = (user) => {
        const {username, email, firstName, lastName, password} = user;
        this.setState({
            username, email, firstName, lastName, password, oldUsername: username
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async e => {
        e.preventDefault();
        const {username, email, firstName, lastName, password, oldUsername} = this.state;
        if(username !== oldUsername){
         // Check if username is available
         const res = await axios.get(`/api/user?username=${username}`);
         if(res.data){
             alert("Username is taken, please try another one");
             return;
         } 
     }
     const newUser = {    
            _id: this.props.match.params.uid,
            username,
            password,
            email,
            firstName,
            lastName
        }
        const res = await axios.put("/api/user", newUser);
        alert("Update Successfully")
        this.showUser(res.data);
    }

    render() {
        const {username, email, firstName, lastName} = this.state;
        return(
    <div> 
    <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
        <button className="btn" form="profileForm" to="profile.html">
        <i className="fas fa-check"/>
        </button>
    </nav>
        <div className="container">
      <form id="profileForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input placeholder="Enter your Username here..."
             className="form-control" type="text" id="username"
             value={username} onChange={this.onChange} name="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input placeholder="Enter your Email here..." 
            className="form-control" type="email" id="email" 
            value={email} onChange={this.onChange}name="email"/>
            </div>
        <div className="form-group">
             <label htmlFor="firstName">First Name</label>
            <input placeholder="Enter your Firstname here..." 
            className="form-control" type="text" id="firstName" 
            value={firstName} onChange={this.onChange} name="firstName"/>
            </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input placeholder="Enter your Last Name here..." 
            value={lastName} onChange={this.onChange} 
            className="form-control" type="text" id="lastName" name="lastName"/>
            </div>
            <Link className="btn btn-primary btn-block" to={`/user/${this.props.match.params.uid}/website`}>
            Websites</Link>
            <Link to="/login" className="btn btn-danger btn-block">Logout</Link>
</form>
</div>
<nav className="navbar navbar-dark bg-primary fixed-bottom">
  <Link to="/user/123">
  <i className="fas fa-user"/></Link>
</nav>
</div>

        );
    }
}