import React, {Component} from "react";
import {Link} from "react-router-dom";
import uuid from "uuid";
export default class Register extends Component{
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
            <div className="container">
        <h1> Register</h1>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your Username here..." 
                className="form-control" type="text" id="username" name="username"
                value = {username}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input placeholder="Enter your Password here..." type="password" 
                className="form-control" id="password" name="password"
                value = {password}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Verify Password</label>
                <input placeholder="Verify your Password here..."type="password" 
                className="form-control" id="password" name="password"
                value = {password2}
                onChange={this.onChange}/>
            </div>
             <button className="btn btn-primary btn-block" to="/user/123">Register</button>
             <Link className="btn btn-danger btn-block" to="/login">Cancel</Link>

        </form>
    </div>
        );
        }
    }