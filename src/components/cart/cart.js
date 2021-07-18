import React , {Fragment} from 'react';
import{Link} from 'react-router-dom';
import{CartInfo} from './../../store/objectonstructors';
import {Add_to_Cart} from './../../store/action'
import {creatSlug} from './../../store/helper';
import{connect} from 'react-redux';
import "./cart.css";



function Cart(props){
    const products = props.products.products.map((item , index) => {
        const {id, proName , title , image , expert , price} = item;
        var cart = new CartInfo(id , proName , 1 , price)
        return(
            <div key={index} className="card" >
                <div className="card-img">
                    <img src={require(`./../../Assets/${image}`).default} className="card-img-top"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{proName}</h5>
                    <p className="card-text">{expert}</p>
                    <p className="card-price">{price} LE</p>
                    <div className="container">
                        <div className="row justify-content-between">
                            <Link  to={`/${creatSlug(title , " " , "-")}` } className="btn btn-primary col-5">View Product</Link>
                            <button type="button" className="btn btn-warning col-5" onClick = {() =>{props.Add_to_Cart(cart)}}>
                                Add to Cart <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    });
    return(
        <Fragment>
            {console.log(props)}
            {console.log(props)}
            <div className="cart-container container">
                {products}
            </div>
        </Fragment>
    )
}

export default connect(null , {Add_to_Cart})(Cart);