import React, {Component} from "react";
import{Link} from "react-router-dom";
import axios from "axios";

export default class Login extends Component{
    state={
        username:"",
        password:"",
        showAlert: false
    }

    onChange= e=>{
        this.setState({
        [e.target.name]:e.target.value,
        showAlert: false
        })
    }
    onSubmit= e=>{ 
        e.preventDefault();
        const {username,password}=this.state;
        const user={
            username,
            password
        }
        this.login(user);
    }
    login=async user=>{
        const res = await axios.get(`/api/user?username=${user.username}&password=${user.password}`)
       
        if(res.data){
            this.props.history.push(`/user/${res.data._id}`);
        } else {
            //alert("invalid credential");
            this.setState({
                showAlert:true
            })
        }
    }

    render() {
        return(
            <div className="container">
        <h1>Login</h1>
        this.state.showAlert?
        (<div className="alert alert-danger">
            Invalid Username and Password
        </div>):null
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                placeholder="Enter Username here..." 
                className="form-control" 
                type="text" 
                id="username" 
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                />
                 
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                placeholder="Enter your Password here..." 
                type="password" 
                className="form-control" 
                id="password" 
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                />
                 
            </div>
             <button className="btn btn-primary btn-block">Login</button>
             </form>
             <Link className="btn btn-success btn-block" to="/register">Register</Link>

        
    </div> 
        );
    }
}