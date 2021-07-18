import React , {Component} from 'react';
import {Formik , Field } from 'formik';
import {Edit_cart} from './../../store/action';
import {connect} from 'react-redux';
import{mapStateToProps} from './../../store/helper'
class UpdateCart extends Component{
    constructor(props){
        super(props)
        this.state ={
            cart: this.props.products
        }
       
    }

    render(){
        return(
            <div>
                <Formik
                    initialValues={this.props.values}
                    onSubmit = {(values) => {
                        values.total = values.count * values.price
                        this.props.Edit_cart(values , this.props.index );
                        this.props.up();
                        console.log(this.props)
                        this.props.toggle()
                    }} 
                    render = { (props) => {
                        return(
                            <form onSubmit={props.handleSubmit}>
                                <div className="mb-3">
                                    <Field className="form-control" name="count" type="text"/>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-info" type="submit">updated</button>
                                </div>
                           </form>
                        )
                    } }         
                >

                </Formik>
            </div>
        )
    }
}

export default connect(null , {Edit_cart})(UpdateCart);