import './css/Footer.css';
import { useCart } from './hooks/useCart';
import { useFilters } from './hooks/useFilters';
export function Footer(){
    const {filters} = useFilters();
    const {cart} = useCart();
    return(
        <>
            <div className="footer">
                <span>jesuslopezprogramador@gmail.com</span>
            </div>
        </>
    )
}