import { Commodity } from '@/types/filters/Commodity'
import { useState } from 'react'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

type FilterAreaCommodityProps = {
  commodities: Commodity[]
}

export const FilterAreaCommodity = ({
  commodities,
}: FilterAreaCommodityProps) => {
  const [selectedCommodities, setSelectedCommodities] = useState<
    Number[] | null
  >([])

  const handleSelectCommodity = (id: number) => {
    const isSelected = selectedCommodities && selectedCommodities.includes(id)
    const updatedPrices = isSelected
      ? selectedCommodities.filter((idCommodities) => idCommodities !== id)
      : [...selectedCommodities!, id]
    setSelectedCommodities(updatedPrices)
  }
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Comodidades" />
      <div className="flex flex-col gap-spacing-xxs">
        {commodities.map((commodity) => (
          <div
            className={`flex items-center gap-2 cursor-pointer`}
            key={commodity.id}
            onClick={() => handleSelectCommodity(commodity.id)}
          >
            <div
              className={`option w-5 h-5 border-1.8 rounded-[3px] cursor-pointer ${
                selectedCommodities &&
                selectedCommodities.includes(commodity.id)
                  ? 'bg-brand-blue border-brand-blue'
                  : 'border-gray-40'
              }`}
            />
            <span className="text-normal text-gray-100">{commodity.name}</span>
          </div>
        ))}
      </div>
    </FilterAreaContainer>
  )
}
