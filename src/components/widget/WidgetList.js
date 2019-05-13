import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class WidgetList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
        <a href="../page/page-list.html"><i className="fas fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">Widgets</span> 
        <a href="widget-chooser.html"><i className="fas fa-plus"></i></a>
    </nav>
    <div className="container-fluid">
    <div>
    <div className="icon-right">
    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>
</div>
<h1>MSIMBO</h1>
    </div>
    <div>
    <div className="icon-right">
    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>
</div>
<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut.</h3>
    </div>
    <div>
 <div className="icon-right">
    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>
</div>
    <img className="img-fluid" src="http://www.ulem.org/static/media/ulem100.68adf498.png">
</div>
<div>
<div className="icon-right">
    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>
</div>
    <p>Lorem ipsum dolor <a href="http:///www.msimbo.com">sit amet consectetur adipisicing elit.</a> Maxime eos et illum adipisci similique dolore labore possimus provident eveniet excepturi accusamus illo veritatis, quia, quisquam alias, error aperiam officia qui. Error, odit unde quos in, optio aspernatur quo atque quasi ducimus saepe iusto eaque tempore quaerat fugit quidem! Atque molestias alias nobis iste expedita. Laboriosam vitae, quae veritatis illo recusandae totam maxime deleniti eum necessitatibus, in sit eius explicabo quisquam est pariatur et accusantium autem aliquam sapiente laborum non ex? Iusto nemo quia perspiciatis quibusdam, possimus, quaerat incidunt saepe natus ullam, ducimus consequatur error voluptas. Odit harum repellat alias magni!</p>
</div>
<div>
<div className="icon-right">
    <a href="widget-image.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>
</div>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloribus.</h3>
</div>
<div>
<div className="icon-right">
    <a href="widget-youtube.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>  
</div>
<div className="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/_zv_Zoa-j2Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
<div className="icon-right">
    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
    <i className="fas fa-bars"></i>    
</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga deleniti ea est illum, beatae accusamus voluptate, nihil provident ullam maxime corrupti iusto. Accusamus laboriosam, quas neque nihil aliquam, magni ipsa quo totam sed aliquid, explicabo impedit ea! Obcaecati vitae, dicta fugit quibusdam ipsum aliquid deserunt praesentium recusandae sint, minima quos facilis nihil labore accusantium mollitia veritatis necessitatibus molestias aut, soluta totam nemo facere unde non qui. Soluta debitis sint explicabo aliquid atque iste ipsum impedit eum, ea similique laborum dolor sit ad. Consequatur earum quasi, repellendus culpa, sapiente maxime, recusandae facilis nesciunt quae rem natus. Neque sed tenetur ipsam?</p>
</div>
</div>
<nav className="navbar navbar-light bg-light fixed-bottom">
    <div>
        <i className="fas fa-play"></i>
        <i className="fas fa-eye"></i>
    </div>
    <a href="../user/profile.html"><i className="fas fa-user text-primary"></i></a>
</nav>
      </div>
    )
  }
}
