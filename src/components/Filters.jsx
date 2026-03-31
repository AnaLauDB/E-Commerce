import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handlePriceChange = (event) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: Number(event.target.value)
        }))
    }

    const handleCategoryChange = (event) => {
        setFilters(prevFilters => ({
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
                    value={filters.minPrice}
                    onChange={handlePriceChange}
                />
                <span>${filters.minPrice}</span>
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