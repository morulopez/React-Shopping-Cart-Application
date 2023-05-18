import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import './css/Products.css';
import { useCart } from './hooks/useCart';
export function Products({products}){
    const {addToCart,removeFromCart,cart} = useCart();
    const checkProductFromCart = product =>{
        return cart.some(item => item.id === product.id)
    }
    return(
        <main className='products'>
            <ul>
                {
                    products.slice(0,30).map(product=>{
                        const isProductInCart = checkProductFromCart(product);
                        return (
                            <li key={product.id}>
                                <img 
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                <div className='info-product'>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div className='footer-product'>
                                    <button className={`${isProductInCart && 'product-added'}`} onClick={()=> isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                        {
                                            isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                                        } 
                                    </button>
                                </div>
                            </li>
                        )}
                    )
                }
            </ul>
        </main>
    )
}