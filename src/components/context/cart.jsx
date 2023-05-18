import { createContext,useReducer } from "react";
import {carReducer,cartInitialState} from "../reducers/cartReducer";
import { useCartReduce } from "../hooks/useCartReduce";
export const CartContext = createContext();

export function CartProvider({children}){
    const [state,dispatch] = useReducer(carReducer,cartInitialState);
    const {addToCart,clearCart,removeFromCart,restToCart} = useCartReduce(dispatch);
    return(
        <CartContext.Provider value={{
            cart:state.cart,
            totalPrice:state.totalPrice,
            addToCart,
            clearCart,
            removeFromCart,
            restToCart
        }}>
        {children}
        </CartContext.Provider>
    )
}