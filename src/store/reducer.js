import {productInfo} from './objectonstructors';
import {addProduct , delet_prduct , edite_Product , add_to_cart , edit_card , remove_product_from_cart} from './actiontype';
import {fuindDoublicatTitle} from './helper';
import { bake_cookie, read_cookie} from 'sfcookies';
const initState ={
    products: [
        new productInfo(Math.random() * 100 , "CHAMPIONS LEAGUE BALL" , "Adidas uefa champions league finale istanbul league ball" , "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..." , " " , "fh7340-f-1000-01.4700.jpg" , "200 " , )
    ],
    cart: []
}

const reducer = (state = read_cookie("show") || initState  , action) => {
    
    if(action.type == addProduct){
        let titleArr = [];
       let newState = state.products.push(action.product);
       const products = state.products.map((item , index) => {
        const { title } = item;
        titleArr.push(title);
        let obj = fuindDoublicatTitle(titleArr);
        state.products[index].title = (obj[`${title}`] > 1 ? `${state.products[index].title} ${obj[`${title}`]}` : state.products[index].title)
       })
       bake_cookie("show" , state)
        return state

    }   else if(action.type == delet_prduct){
        state.products.splice(action.index , 1)
        bake_cookie("show" , state)

         return state

     }  else if(action.type == edite_Product){
        state.products.splice(action.index , 1 , action.product);
        if(state.cart){
            state.cart.forEach((item , index) => {
                if(state.products[action.index].id == item.id){
                    item.price = state.products[action.index].price;
                    item.total = item.count * item.price
                }
            }) 
        }
        console.log(state.cart[action.index].price)
        bake_cookie("show" , state)
         return state

     }  else if(action.type == add_to_cart){
        if (!('cart' in state)){
            console.log("no have cat");
            state.cart = [];
            state.cart.unshift(action.product);
            console.log(state , state.cart.length)
            alert("The product is added to cart")
            bake_cookie("show" , state)
            return state;

        } else {
            console.log("have cart");
            state.cart.unshift(action.product)
            console.log(state , state.cart.length);
            alert("The product is added to cart");
            bake_cookie("show" , state)
            return state;
        }

     }  else if(action.type == edit_card){
        state.cart.splice(action.index , 1 , action.product)
        bake_cookie("show" , state)

         return state

     }  else if(action.type == remove_product_from_cart){
        state.cart.splice(action.index , 1)
        bake_cookie("show" , state)

         return state
         
     }  else {
        bake_cookie("show" , state)
        return state;
    }
}

export default reducer;
