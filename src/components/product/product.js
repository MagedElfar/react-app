import React , {Component} from 'react';
import {mapStateToProps} from './../../store/helper';
import {creatSlug} from './../../store/helper';
import {connect} from 'react-redux';
class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: " ",
            products: this.props.products,
            product: " "
        }
    }

    componentWillMount(){
        console.log("test" , this.state.products)
        for (var pro in this.state.products){
            console.log(this.state.index , this.state.product , "+test")
            let index = this.state.products[pro].findIndex(item => item.title == creatSlug(this.props.match.params.title , "-" , " "));
            
            console.log(index)
             this.setState({
                 index: index,
                product: pro
             }, () => {
                console.log(this.state.index , this.state.product , "test")
             })

           
    
            if(!isNaN(this.state.index) && this.state.index > -1){
                break;
            }
            console.log(this.state.index , this.state.product , "test")
        }
    
    }
   

    render(){
        const {title , price , id} = this.state.products[this.state.product][this.state.index]
        return(
            <div>
                {console.log(id)}
                { <h1>{title.replace(/\d+/g,'').trim()}</h1> }
            </div>
        )
    }
   
}

export default connect(mapStateToProps)(Product);