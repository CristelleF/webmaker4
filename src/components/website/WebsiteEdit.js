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

async componentDidMount() {
const res = await axios.get(`/api/user/${this.state.uid}/website`);
await this.filterWebsites(res.data);
this.getWebsite(this.state.wid);
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

delete = async () => {
    await axios.delete(`/api/website/${this.state.wid}`);
    this.props.history.push(`/user/${this.state.uid}/website`);
};

onSubmit = async e => {
    e.preventDefault();
    {/*this.props.editWeb(
        this.props.match.params.wid,
        this.state.name,
        this.state.description
    );*/}
    const newWeb = {
        _id: this.state.wid,
        name: this.state.name,
        description: this.state.description,
        developerId: this.state.uid
    }
    await axios.put("/api/website", newWeb);
    this.props.history.push(`/user/${this.state.uid}/website`);
};
    
        render() {
            const { uid } = this.state;
    return (
<div>
   <nav className="navbar navbar-dark bg-primary fixed-top row">
<div className="col-lg-4 d-none d-lg-block text-center text-white">
    <Link className="float-left" to={`/user/${uid}/website`}>
        <i className="fas fa-chevron-left"/>
    </Link>
    <span className="">Websites</span>
    <Link className="float-right" to={`/user/${uid}/website/new`}><i className="fas fa-plus"/>
   </Link>
</div>
<div className="col-lg-8 text-center-white">
    <Link className="d-lg-none float-left" 
    to={`/user/${uid}/website`}>
    <i className="fas fa-chevron-left"/>
    </Link>
    <span className="">Edit Website</span>
    <button form="editWebForm" className="float-right btn"><i 
    className="fas fa-check"/></button>
</div>
    </nav>    
<div className="row">
<div className="col-lg-4 d-none d-sm-block">
    <div className="container-fluid">
<ul className="list-group">
{this.state.websites.map(website=>(
    <li key={website._id} 
    className="list-group-item">
        <Link to={`/user/${uid}/website/${website._id}/page`}>
        {website.name}</Link>

{/* <i className="float-right" to="website-edit.html"><i className="fas fa-cog"/></Link>
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
</li>*/}
<Link to={`/user/${uid}/website/${website._id}`} 
className="float-right"> <i className="fas fa-cog" /></Link>
    </li>))}
    </ul>
</div>
</div>

<div className="col-sm-8">
<div className="container-fluid">
    <form id="editWebForm" onSubmit={this.onSubmit}>
        <div className="form-group">
        <label htmlFor="name"><b>Name</b></label> 
    <input id="name" name="name" placeholder="Enter website name..." 
        value={this.state.name} onChange={this.onChange}
        className="form-control" type="text"/>
<div className="form-group"></div>
    <label htmlFor="description"><b>Discription</b>
    </label>
        <textarea rows="5" placeholder="Enter website description..." className="form-control" id="description" name="description" type="text"
        value={this.state.description}
        onChange={this.onChange}/>
    </div>
        <Link to={`/user/${uid}/website`} className="btn btn-lg btn-warning">Cancel>
        </Link>
        <button type="button"onClick={this.delete} className="btn btn-danger btn-lg float-right">Delete</button>
            </form>
            </div>
        </div> </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <div className="full-width">
                <Link className="color-white float-right"
                 to={`/user/${uid}`}><i className="fas fa-user"/></Link>
             </div>
              </nav>  
      </div>
    );
  }
}
