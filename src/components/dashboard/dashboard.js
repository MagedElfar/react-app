import React , {Component} from 'react';
import {mapStateToProps , creatSlug} from './../../store/helper';
import{Delet_Product}  from './../../store/action';
import UpdateProduct from './../../Forms/updateform/updatetproduct';
import AddProduct from '../../Forms/addform/addform';
import './dashboard.css'
import {connect} from 'react-redux';
import{Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: this.props.products,
            showArr: [
                {show: false}
            ]
        }
    }

    componentWillMount(){
       let newArr = []
       this.state.products.products.forEach(() => {
            newArr = [...newArr , {show: false}]
        })

       this.setState({showArr: newArr})
       
       
    }



    render(){
        let pro = this.state.products.products.map((item , index) => {
            const { proName , title } = item;

            return(
                <div key={index} className="pro-control" >
                    <div className="pro-name">
                        <h5>{proName}</h5>
                    </div>
                    <div  className="pro-view">
                         <Link  to={`/${creatSlug(title , " " , "-")}` } className="btn btn-primary">View</Link>
                    </div>
                    <div className="pro-edit">
                        <button type="button" className="btn btn-warning" onClick = {() => {this.toggelform(index)}}>Edit</button>
                        {(this.state.showArr[index].show ? <UpdateProduct valuse = {item} index = {index} toogel = {this.toggelform} up = {this.UpdateProductState} /> : "")} 
                    </div>
                    <div  className="pro-delte">
                        <button type="button" className="btn btn-danger" onClick = {() => {this.deletePro(index)}}>delete</button>
                    </div>
                </div>  
            )
        });
        return(
            <section className="dashboard-Container">
                <div className="row">
                    <aside className="col-3">
                        <ul className="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                        <li className="nav-item col-12" role="presentation">
                            <button className="col-12 nav-link active dasboard-links text-start" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">manage products</button>
                        </li>
                        <li className="nav-item col-12 dasboard-links" role="presentation">
                            <button className="nav-link col-12 text-start" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">add a new product</button>
                        </li>
                        </ul>
                    </aside>
                    <div className="tab-content col-9" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            {pro}   
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <AddProduct update={this.UpdateProductState} /> 
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }

    toggelform = (index) => {
        let items = [...this.state.showArr];
        items.splice(index , 1 , {show: !items[index].show})
        this.setState({showArr: items})
    }

    deletePro = (index) => {
        let confirm_ = window.confirm("Please click on ok to delete the product");
        if (confirm_ == true) {
            this.props.Delet_Product(index);
            this.setState({products: this.props.products});
          } else {
            alert("delete is canseled")
          }
        
    }

    UpdateProductState = () => {
        let newArr = []
       this.state.products.products.forEach(() => {
            newArr = [...newArr , {show: false}]
        })

        this.setState({showArr: newArr})
        this.setState({products: this.props.products});
        
    }   
}

export default connect(mapStateToProps , {Delet_Product})(Dashboard)