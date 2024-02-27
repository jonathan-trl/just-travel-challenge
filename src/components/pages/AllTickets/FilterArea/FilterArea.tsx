import { FilterAreaCommodity } from './FilterAreaCommodity'
import { FilterAreaPrice } from './FilterAreaPrice'
import { FilterAreaProperty } from './FilterAreaProperty'
import { FilterAreaRatings } from './FilterAreaRatings'
import { FilterAreaReviewScore } from './FilterAreaReviewScore'

export const FilterArea = () => {
  return (
    <div className="bg-white px-spacing-xs shadow-sm xl:col-span-3">
      <div className="flex py-spacing-xs items-center justify-between border-b border-gray-10">
        <span className="text-heading-2 font-bold text-brand-black">
          Filtro
        </span>
        <span className="text-support-06 cursor-pointer">
          Limpar todos os filtros
        </span>
      </div>
      <FilterAreaPrice />
      <FilterAreaRatings />
      <FilterAreaCommodity />
      <FilterAreaProperty />
      <FilterAreaReviewScore />
    </div>
  )
}
