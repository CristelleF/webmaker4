import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import uuid from "uuid";
export default class Register extends Component{
    state = {
        username: "",
        password: "",
        password2: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username, password, password2);
    }

    async register(username, password, password2) {
        // Does passwords match
        if(password !== password2) {
            alert("The passwords are not match");
            return;
        }

    // Check if username is available
    const res = await axios.get(`/api/user?username=${username}`);
        
    if(res.data){
        alert("Username is taken, please try another one");
        return;
    } else {
        const newUser = {
            _id: uuid(),
            username,
            password,
            email: "",
            firstName: "",
            lastName: ""
        };
        const res2 = await axios.post("/api/user", newUser);
        this.props.history.push(`/user/${res2.data._id}`);
    }
}

render() {
    const {username, password, password2} = this.state
        return(
            <div className="container">
        <h1> Register</h1>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                className="form-control" type="text" id="username" name="username"
                value = {username}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                className="form-control" id="password" name="password"
                value = {password}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Verify Password</label>
                <input type="password" 
                className="form-control" id="password" name="password"
                value = {password2}
                onChange={this.onChange}/>
            </div>
             <button className="btn btn-primary btn-block" >Register</button>
             <Link className="btn btn-danger btn-block" to="/login">Cancel</Link>

        </form>
    </div>
        );
        }
    }