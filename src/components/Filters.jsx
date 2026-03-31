import { useState, useId } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handlePriceChange = (event) => {
        setMinPrice(Number(event.target.value))
        onChange(prevFilters => ({
            ...prevFilters,
            minPrice: Number(event.target.value)
        }))
    }

    const handleCategoryChange = (event) => {
        onChange(prevFilters => ({
            ...prevFilters,
            category: event.target.value
        }))
    }


    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handlePriceChange}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleCategoryChange}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}