import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Register extends Component{
    render() {
        return(
            <div className="container">
        <h1> Register</h1>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your Username here..." className="form-control" type="text" id="username" name="username"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input placeholder="Enter your Password here..." type="password" className="form-control" id="password" name="password"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Verify Password</label>
                <input placeholder="Verify your Password here..."type="password" className="form-control" id="password" name="password"/>
            </div>
             <Link className="btn btn-primary btn-block" to="/user/123">Register</Link>
             <Link className="btn btn-danger btn-block" to="/login">Cancel</Link>

        </form>
    </div>
        )
        }
    }