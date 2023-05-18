
export const cartInitialState =  JSON.parse(window.localStorage.getItem('cart')) || {cart:[],totalPrice:0}

const saveLocalStorage = (state)=>{
    window.localStorage.setItem('cart',JSON.stringify(state));
} 

export const carReducer = (state,action) =>{
    const {type:actionType,payload:actionPayload} = action
    switch(actionType){
        case 'ADD_TO_CART':{
            const {id} = actionPayload;
            return addToCart(id,state,actionPayload);
        }
        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload;
            return removeFromCart(id,state);
        }
        case 'REST_TO_CART':{
            const {id} = actionPayload;
            return restToCart(id,state);
        }
        case 'CLEAR_CART':{
            const newState = {cart:[],totalPrice:0};
            saveLocalStorage(newState);
            return newState;
        }
    }
        return state
}

const addToCart = (id,state,actionPayload)=>{
    // check if product is already in the cart
    const productIncartIndex = state.cart.findIndex(item => item.id === id);
    if(productIncartIndex>=0){
        // one way is using structuredClone
        const newState = structuredClone(state);
        newState.cart[productIncartIndex].quantity += 1;
        newState.totalPrice=getTotalPrice(newState.cart);
        saveLocalStorage(newState)
        return newState;
    }
    // if product iss not in the cart
    const newState = {
        cart:[...state.cart,{...actionPayload,quantity:1}],
        totalPrice:state.totalPrice + actionPayload.price
    }
    saveLocalStorage(newState);
    return newState;
}

const removeFromCart = (id,state)=>{
    const newState ={
        cart : state.cart.filter(item=>{
            return item.id !== id
        })
    }
    newState.totalPrice = getTotalPrice(newState.cart);
    saveLocalStorage(newState);
    return newState;
}

const restToCart = (id,state)=>{
    // check if product is already in the cart
    const productIncartIndex = state.cart.findIndex(item => item.id === id);
    if(productIncartIndex>=0){
        // one way is using structuredClone
        const newSate = structuredClone(state);
        newSate.cart[productIncartIndex].quantity -= 1;
        if(newSate.cart[productIncartIndex].quantity===0){
            return removeFromCart(id,state);
        }
        newSate.totalPrice = getTotalPrice(newSate.cart);
        saveLocalStorage(newSate);
        return newSate;
    }
}

const getTotalPrice = (cart)=>{
    let total = cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
    return total
}