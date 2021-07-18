import {Field} from 'formik';
import './form.css'

const form = (props , submit) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Product Name:</label>
                <Field className="form-control" name="proName" type="text"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Product title:</label>
                <Field className="form-control" name="title" type="text"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Product Category:</label>
                <Field className="form-control" name="category"  as="select">
                <option value="" disabled >Choose Category</option>
                    <option value="foot-ball" >Foot balll</option>
                    <option value="tennis">Tennis</option>
                    <option value="basket-ball">Basket Ball</option>
                </Field>
            </div>
            <div className="mb-3">
                <label className="form-label">Product Price:</label>
                <Field className="form-control" name="price" type="text"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Product Image:</label>
                <Field className="form-control" name="image" type="text"/>
            </div>
            <div className="mb-3">
                <label className="form-label">About Product:</label>
                <Field className="form-control" name="expert"  component="textarea" rows="2" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Description:</label>
                <Field className="form-control" name="description"  component="textarea"/>
            </div>
            <div className="mb-3">
                <button className="btn btn-info" type="submit">{submit}</button>
            </div>
        </form>
    )
}

export default form;