import { commodities } from '@/mocks/filters/Commodities'
import { prices } from '@/mocks/filters/Prices'
import { properties } from '@/mocks/filters/Properties'
import { ratings } from '@/mocks/filters/Ratings'
import { reviews } from '@/mocks/filters/Reviews'
import { FilterAreaCommodity } from './FilterAreaCommodity'
import { FilterAreaPrice } from './FilterAreaPrice'
import { FilterAreaProperty } from './FilterAreaProperty'
import { FilterAreaRating } from './FilterAreaRating'
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
      <FilterAreaPrice prices={prices} />
      <FilterAreaRating ratings={ratings} />
      <FilterAreaCommodity commodities={commodities} />
      <FilterAreaProperty properties={properties} />
      <FilterAreaReviewScore reviews={reviews} />
    </div>
  )
}
