import { useState,useId } from 'react'
import './css/Filters.css'
import { useFilters } from './hooks/useFilters';
export function Filters(){
    const {filters,setFilters} = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const handleChangePrice = (event)=>{
        setFilters(prevState=>({
           ...prevState,minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event)=>{
        setFilters(prevState=>(
            {
                ...prevState,category:event.target.value
            }
        ))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" id={minPriceFilterId} min="0" value={filters.minPrice} max="1000" onChange={handleChangePrice}/> ${filters.minPrice}
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}