import React , {Component} from 'react';
import{BrowserRouter , Route , Switch , withRouter} from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Card from './components/card/card';
import FootBall from './components/footBall/football';
import Product from './components/product/product';
import Dashboard from './components/dashboard/dashboard';


import {mapStateToProps} from './store/helper';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
      proCat: []
    }
  }

//   componentDidMount(){
//     let catArr = this.state.products.products.map(item => item.category);
//       let filtterCat = new Set(catArr);
//       catArr = [...filtterCat]
// //console.log(catArr);
//       this.setState({proCat:catArr})
//   }

  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if (prevProps.specificProperty !== this.props.specificProperty) {
  //     let catArr = this.state.products.products.map(item => item.category);
  //     let filtterCat = new Set(catArr);
  //     catArr = [...filtterCat]
  //     console.log(catArr);
  //     this.setState({proCat:catArr})
  //   }
  // }

  render(){
    return (
      
      <BrowserRouter>
        <Nav />
        {/* <h1>{console.log(this.state.proCat)}</h1> */}
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route  exact path="/Shop" component={FootBall} />
          <Route  exact path="/dashboard" component={Dashboard} />
          <Route  exact path="/cart" component={Card} />
          <Route exact path="/:title" component={Product} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps)(App);
