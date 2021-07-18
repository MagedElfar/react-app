import React , {Component , Fragment} from 'react';
import {Formik  } from 'formik';
import {productInfo} from './../../store/objectonstructors';
import {add_Product} from './../../store/action';
import form from './../component/form'
import {connect} from 'react-redux';

class AddProduct extends Component{
    render(){
        return(
            <Fragment>
                
                <div className="form-title">
                    <h2>Add Form:</h2>
                </div>
                <Formik
                    initialValues={new productInfo()}
                    onSubmit = {(values , {resetForm}) => {
                        values.title = values.title.toLowerCase()
                        console.log(values)
                        this.props.add_Product(values);
                        resetForm(new productInfo());
                        this.props.update();
                        alert("your product has added");
                    }} 
                    render = { (props) => form(props , "Add") }         
                >

                </Formik>
            </Fragment>
        )
    }
}

export default connect(null , {add_Product})(AddProduct);