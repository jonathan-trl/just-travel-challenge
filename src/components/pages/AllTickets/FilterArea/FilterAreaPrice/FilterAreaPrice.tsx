import { Button } from '@/components/common/Button'
import { Price } from '@/types/filters/Price'
import { useState } from 'react'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

type FilterAreaPriceProps = {
  prices: Price[]
}

export const FilterAreaPrice = ({ prices }: FilterAreaPriceProps) => {
  const [selectedPrice, setSelectedPrice] = useState(1)

  const handleSelectPrice = (id: number) => {
    setSelectedPrice(id === selectedPrice ? selectedPrice : id)
  }
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Preço" />
      <div className="grid grid-cols-2 gap-2">
        {prices.map((price) => (
          <div key={price.id}>
            <Button
              title="R$ 10,00 - R$ 390,00"
              selected={price.id === selectedPrice}
              onClick={() => handleSelectPrice(price.id)}
            />
          </div>
        ))}
      </div>
    </FilterAreaContainer>
  )
}
