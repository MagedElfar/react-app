import React , {Component} from 'react';
import{mapStateToProps} from './../../store/helper'
import{CartInfo} from './../../store/objectonstructors';
import CardList from './cardList';
import{connect} from 'react-redux';
import "./card.css";

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: this.props.products,
            sum: 0
        }
    }

    compo

    
    render(){
        let sum =0;
        let list = [];
        if(this.state.cart.cart){
            list = this.state.cart.cart.map((pro , index) => {
           
                sum += pro.total
                return(
                    <div key={index} className="col-12">
                        <CardList sum = {this.sum} pro={pro} up = {this.updateCart} index={index} up={this.updateCart}/>
                    </div>
                    
                )
                
            })
        }
        return(
            <div className="carts">
                <div className="container">
                    <div className="row car-info">
                        <div className="col-6 text-center text-capitalize">name</div>
                        <div className="col-2 text-center text-capitalize">count</div>
                        <div className="col-2 text-center text-capitalize">Remove</div>
                        <div className="col-2 text-center text-capitalize">total</div>
                        
                    </div>
                    <div className="row ">
                        {(list.length > 0 ? list : <div className="empty-array text-center text">Your Cart is empty</div>)}
                    </div>
                    <div className="row cat-all-total">
                        <div className="col-10 text-center">
                            Cart Total
                        </div>
                        <div className="col-2 text-center">
                            {`${sum} LE`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    updateCart = () => {
        this.setState({cart: this.props.products})
    }

    sum = (counr , price) => {
        this.setState({sum: this.state.sum+counr*price})
    }
        
}

export default connect(mapStateToProps)(Card)