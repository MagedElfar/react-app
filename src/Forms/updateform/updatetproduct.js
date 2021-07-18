import React , {Component} from 'react';
import {Formik  } from 'formik';
import {Edit_Product} from './../../store/action';
import form from './../component/form'
import {connect} from 'react-redux';
import './updateproduct.css'

class UpdateProduct extends Component{
    render(){
        return(
            <div className="updtat-form">
                <div className="close-btn" onClick={() => this.props.toogel(this.props.index)}><i className="fas fa-times"></i></div>
                {console.log(this.props)}
                <Formik
                    initialValues={this.props.valuse}
                    onSubmit = {(values ) => {
                        this.props.Edit_Product(values , this.props.index );
                        alert("your product has been updated" );
                        this.props.toogel(this.props.index)
                       // this.props.up()
                        console.log(this.props.index)
                    }} 
                    render = { (props) => form(props , "Update") }         
                >

                </Formik>
            </div>
        )
    }
}

export default connect(null , {Edit_Product})(UpdateProduct);