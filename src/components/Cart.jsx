import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import './css/Cart.css';
import { useCart } from "./hooks/useCart";
function CartItem({thumbnail,price,title,quantity,addToCart,restToCart}){
    return (
        <li>
            <img src={thumbnail} alt={title}/>
            <div>
                <strong>{title}</strong> ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
                <button onClick={restToCart}>-</button>
            </footer>
        </li>
    )
}
export function Cart(){
    const cartCheckboxId = useId();
    const {clearCart,cart,addToCart,restToCart,totalPrice} = useCart();
    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>
            <aside className="cart">
                <ul>
                    {   
                        cart.map(product=>{
                            return <CartItem 
                                key={product.id} 
                                addToCart={()=>addToCart(product)}
                                restToCart={()=>restToCart(product)}
                                {...product}
                            />;
                        })
                    }
                </ul>
                <footer className="footer-aside">
                    <button onClick={clearCart}>
                        <ClearCartIcon/>
                    </button>
                    <span className="total-price">
                        Total : ${totalPrice}
                    </span>
                </footer>
            </aside>
        </>
    )
}