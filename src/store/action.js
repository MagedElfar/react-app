import {addProduct , delet_prduct , edite_Product , add_to_cart , edit_card , remove_product_from_cart} from './actiontype';

const add_Product = (product) => {
    const action = {
        type:addProduct ,
        product
    }

    return action
}

const Delet_Product = (index ) => {
    const action ={
        type: delet_prduct,
        index 
    }
    return action
}

const Edit_Product = (product , index) => {
    const action = {
        type: edite_Product,
        product,
        index
    };
    return action
};

const Edit_cart = (product , index) => {
    const action = {
        type: edit_card,
        product,
        index
    };
    return action
};

const Add_to_Cart = (product) => {
    const action = {
        type: add_to_cart,
        product,
    };
    return action
};

const Delet_Product_cart = (index ) => {
    const action ={
        type: remove_product_from_cart,
        index 
    }
    return action
}

export{add_Product , Delet_Product , Edit_Product , Add_to_Cart , Edit_cart , Delet_Product_cart}