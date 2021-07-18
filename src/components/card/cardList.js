import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Delet_Product_cart} from './../../store/action'
import UpdateCart from './../../Forms/updateart/updatecart'
import "./card.css";

class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            pro: this.props.pro,
            show: true
         
        }
    }
    render(){
        const {name , count , price , total} = this.props.pro;
       // this.props.sum(cout , price)
        return(
            <div className="row cart-list">
                <div className="col-6 text-center">{name}</div>
                
                <div className="col-2 d-flex align-items-center justify-content-center">{(this.state.show ? <div onClick={this.toggle}>{count}</div> : <UpdateCart toggle={this.toggle} values={this.props.pro} index={this.props.index} up={this.props.up} />)}</div>

                <div  className="col-2 text-center">
                        <button type="button" className="btn btn-danger" onClick = {() => {this.deletePro(this.props.index)}}>Delete</button>
                </div>

                <div  className="col-2 text-center d-flex align-items-center justify-content-center">
                        {`${total} LE`}
                </div>
            </div>
            
          

        )
    }

    toggle = () => {
        this.setState({show: !this.state.show});
    } 

    deletePro = (index) => {
        
            this.props.Delet_Product_cart(index);
            this.props.up()
        
    }
}

export default connect(null , {Delet_Product_cart})(CardList)