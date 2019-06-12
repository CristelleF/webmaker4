import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
export default class Register extends Component{
    state = {
        username: "",
        password: "",
        password2: "",
        showPasswordAlert: false,
        showUsernameAlert: false,
        showUsernameLenghtAlert: false,
        showPasswordLengthAlert: false

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showPasswordAlert: false,
            showUsernameAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username, password, password2);
       
    }

    async register(username, password, password2) {
        //check username length
        if(username.length<5){
        this.setState({
        showUsernameLengthAlert:true
    })
    return;
}
        //check password length
        if(password.length<5){
            this.setState({
                showPasswordLengthAlert:true
            })
            return;
        }
        // Does passwords match
        if(password !== password2) {
           // alert("The password entered is not a match");
           this.setState({
             showPasswordAlert: true  
           })
            return;
        }

    // Check if username is available
    const res = await axios.get(`/api/user?username=${username}`);
        
    if(res.data){
       // alert("Username is taken, please try another one");
        this.setState({
            showUsernameAlert:true
        })
        return;
    } else {
        const newUser = {
            username,
            password,
            email: "",
            firstName: "",
            lastName: "",
        };
        const res2 = await axios.post("/api/register", newUser);
        this.props.history.push(`/user/${res2.data._id}`);
    }
}

render() {
    const {username, password, password2} = this.state
        return(
            <div className="container">
        <h1> Register</h1>
       {this.state.showPasswordAlert&&(<div className="alert alert-danger">The password you entered doesn't match, please try again.</div>)}
        {this.state.showUsernameAlert&&(<div className="alert alert-danger">The username is taken, please try another one.</div>)}
        {this.state.showPasswordLengthAlert&&(<div className="alert alert-danger">The password you entered is too short, please try again.</div>)}
        {this.state.showUsernameLengthAlert&&(<div className="alert alert-danger">The username you entered is too short, please try again.</div>)}
        
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter here..."
                
                className="form-control" type="text" id="username" name="username"
                value = {username}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password here..."
                className="form-control" id="password" name="password"
                value = {password}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Verify Password</label>
                <input type="password" placeholder="Verify password..."
                className="form-control" id="password2" name="password2"
                value = {password2}
                onChange={this.onChange}/>
            </div>
             <button className="btn btn-primary btn-block" >Register</button>
             </form>
             <Link className="btn btn-danger btn-block" to="/login">Cancel</Link>

        
    </div>
        );
        }
    }