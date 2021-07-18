import React , { Component }  from 'react';
import{NavLink , withRouter} from 'react-router-dom';
import logo from './../../Assets/logo-2_adobespark.png';
import {mapStateToProps} from './../../store/helper';
import {connect} from 'react-redux';
import './nav.css';

class Nav extends Component{

  constructor(props){
    super(props);
    this.state = {
      addClass: false,
      products: this.props.products
    }
  }
  
  componentWillMount(){
      console.log(window.location.pathname.includes("dashboard"))
  }

  render() {
    const backgroundStyle = window.location.pathname.includes("dashboard") || window.location.pathname.includes("cart") 
      ? { className: 'dash-nav navbar navbar-expand-lg navbar-light bg-light' }
      : { className: 'navbar navbar-expand-lg navbar-light bg-light' }
    return(
      <nav id="main-nav"  className={backgroundStyle.className}>
        {console.log(this.props)}
      <div className="container">
        <NavLink to="/" className="navbar-brand"><img src={logo} /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link fw-bold" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Shop" className="fw-bold nav-link" aria-current="page" >Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="fw-bold nav-link" aria-current="page" >Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="fw-bold nav-link" aria-current="page" >Cart {this.props.products.cart.length}</NavLink>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    );
  }
  

  componentDidMount(){
    const nav = document.getElementById("main-nav");
  
  const navScroll = () => {
    if(window.scrollY > nav.offsetHeight){
      nav.classList.add("sticky-nav")
    }else{
      nav.classList.remove("sticky-nav")
    }
  };
  
  window.addEventListener("scroll" , navScroll)
  }
};



export default withRouter(connect(mapStateToProps)(Nav));