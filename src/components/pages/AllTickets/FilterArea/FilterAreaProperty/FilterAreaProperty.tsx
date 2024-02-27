import { properties } from '@/config/filters/Property'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

export const FilterAreaProperty = () => {
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Tipo de propriedade" />
      <div className="flex flex-col gap-3">
        {properties.map((property) => (
          <div
            className={`option flex items-center rounded-sm cursor-pointer border py-1 ${
              property.selected ? 'border-brand-blue' : 'border-gray-20'
            }`}
            key={property.id}
          >
            <div className="mx-2">{property.icon}</div>
            <span
              className={`${
                property.selected ? 'text-brand-blue' : 'text-gray-20'
              }`}
            >
              {property.name} ({property.qtt})
            </span>
          </div>
        ))}
      </div>
    </FilterAreaContainer>
  )
}
