import React , {Component , Fragment} from 'react';
import {connect} from 'react-redux';
import Cart from '../cart/cart';
import {mapStateToProps} from './../../store/helper';
import './football.css';

class FootBall extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: this.props.products
        }
    }

    render(){
        return(
            <Fragment>
                <section className="hero-section"> 
                    
                </section>
                <Cart products={this.state.products}/>
            </Fragment>

        )
        
    }
}



export default connect(mapStateToProps)(FootBall);