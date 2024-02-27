import { JTStar } from '@/components/icon/JTStar'
import { ratings } from '@/config/filters/Ratings'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

export const FilterAreaRatings = () => {
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Tipo de propriedade" />
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {ratings.map((rating) => (
          <div
            key={rating.id}
            className="flex items-center border border-gray-10 p-1 cursor-pointer"
          >
            {rating.items.map((rating) => (
              <div key={rating.id} className="flex items-center">
                <JTStar />
              </div>
            ))}

            <span className="text-normal text-gray-30 ml-2">
              ({rating.qtt})
            </span>
          </div>
        ))}
        {/* <div className="flex items-center border border-gray-10 p-1">
          <div className="flex items-center">
            <JTStar />
            <JTStar />
            <JTStar />
            <JTStar />
            <JTStar />
          </div>
          <span>(134)</span>
        </div>
        <div className="flex items-center border border-gray-10 p-1">
          <div className="flex items-center">
            <JTStar />
            <JTStar />
            <JTStar />
            <JTStar />
          </div>
          <span>(134)</span>
        </div>
        <div className="flex items-center border border-gray-10 p-1">
          <div className="flex items-center">
            <JTStar />
            <JTStar />
            <JTStar />
          </div>
          <span>(72)</span>
        </div>
        <div className="flex items-center border border-gray-10 p-1">
          <div className="flex items-center">
            <JTStar />
            <JTStar />
          </div>
          <span>(72)</span>
        </div>
        <div className="flex items-center border border-gray-10 p-1">
          <div className="flex items-center">
            <JTStar />
          </div>
          <span>(72)</span>
        </div> */}
      </div>
    </FilterAreaContainer>
  )
}
