import {products as initialProducts} from './mocks/products.json';
import { Products } from "./components/products"; 
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Cart } from './components/Cart';
import { useState } from 'react';
import { useFilters } from './components/hooks/useFilters.jsx';
import { CartProvider } from './components/context/cart';
export function App(){
    const {filters,filterProducts} = useFilters()
    const [products] = useState(initialProducts);
    const filteredProducts = filterProducts(products)
    return(
        <CartProvider>
            <Header/>
            <Cart/>
            <Products products={filteredProducts}/>
            <Footer/>
        </CartProvider>
    )
}