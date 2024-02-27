import { commodities } from '@/config/filters/Commodities'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

export const FilterAreaCommodity = () => {
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Comodidades" />
      <div className="flex flex-col gap-spacing-xxs">
        {commodities.map((commodity) => (
          <div
            className="flex items-center gap-2 cursor-pointer"
            key={commodity.id}
          >
            <div className="option w-5 h-5 border-1.8 border-gray-40 rounded-[3px] cursor-pointer " />
            <span className="text-normal text-gray-100">{commodity.name}</span>
          </div>
        ))}
      </div>
    </FilterAreaContainer>
  )
}
