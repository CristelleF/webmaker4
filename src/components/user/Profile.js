import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Profile extends Component{
    state = {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    componentDidMount(){
        const uid = this.props.match.params.uid;
        // looking for use with given uid
        for(let user of this.props.users) {
            if(user._id === uid) {  
                this.showUser(user);
                return;
            }
        };
        alert("No user is found with given id");
    }

    showUser = (user) => {
        const {username, email, firstName, lastName, password} = user;
        this.setState({
            username, email, firstName, lastName, password
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, email, firstName, lastName, password} = this.state;
        const newUser = {
            _id: this.props.match.params.uid,
            username,
            password,
            email,
            firstName,
            lastName
        }
        this.props.updateUser(newUser)
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
        <div className="form-group">
             <label htmlFor="firstName">First Name</label>
            <input placeholder="Enter your Firstname here..." 
            className="form-control" type="text" id="firstName" 
            value={name} onChange={this.onChange}name="firstName"/>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input placeholder="Enter your Last Name here..." 
            value={name} onChange={this.onChange} 
            className="form-control" type="text" id="lastName" name="lastName"/>
            </div>
            <Link className="btn btn-primary btn-block" to={`/user/${this.props.match.params.uid}/website`}>
            Websites</Link>
            <Link to="/login" className="btn btn-danger btn-block">>Logout</Link>
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