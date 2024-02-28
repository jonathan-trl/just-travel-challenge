import { PropertyProps } from '@/types/filters/Property'
import { useState } from 'react'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

type FilterAreaPropertyProps = {
  properties: PropertyProps[]
}

export const FilterAreaProperty = ({ properties }: FilterAreaPropertyProps) => {
  const [selectedProperty, setSelectedProperty] = useState(1)

  const handleSelectProperty = (id: number) => {
    setSelectedProperty(id === selectedProperty ? selectedProperty : id)
  }
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Tipo de propriedade" />
      <div className="flex flex-col gap-3">
        {properties.map(({ id, name, icon: Icon, qtt }) => (
          <div
            key={id}
            className={`option flex gap-2 pl-2 items-center rounded-sm cursor-pointer border py-1 ${
              id == selectedProperty ? 'border-brand-blue' : 'border-gray-20'
            }`}
            onClick={() => handleSelectProperty(id)}
          >
            <Icon color={id == selectedProperty ? '#4070F4' : '#CED2DB'} />
            <span
              className={`${
                id == selectedProperty ? 'text-brand-blue' : 'text-gray-20'
              }`}
            >
              {name} ({qtt})
            </span>
          </div>
        ))}
      </div>
    </FilterAreaContainer>
  )
}
