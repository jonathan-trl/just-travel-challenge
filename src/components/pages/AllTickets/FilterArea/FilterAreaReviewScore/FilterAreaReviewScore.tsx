import { reviews } from '@/mocks/filters/Reviews'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

export const FilterAreaReviewScore = () => {
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Review Score" />
      <div className="flex flex-col gap-3">
        {reviews.map((review) => (
          <div className="flex items-center gap-3" key={review.id}>
            <div className="relative w-[190px] h-[30px] bg-[#D9D9D9] leading-[30px]">
              <div
                className={`absolute top-0 left-0 w-[${review.percentage}] h-full bg-support-03`}
              >
                {review.review && (
                  <span className="pl-2 text-white text-sm">
                    {review.review}
                  </span>
                )}
              </div>
            </div>
            <span className="text-[12px] text-gray-70">
              {review.name} ({review.qtt})
            </span>
          </div>
        ))}
        {/* <div className="flex items-center gap-3">
          <div className="relative w-[190px] h-[30px] bg-[#D9D9D9] leading-[30px]">
            <div className="absolute top-0 left-0 w-[85%] h-full bg-support-03">
              <span className="pl-2">9+</span>
            </div>
          </div>
          <span className="text-[12px]">Excelente (543)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-[190px] h-[30px] bg-[#D9D9D9] leading-[30px]">
            <div className="absolute top-0 left-0 w-[70%] h-full bg-support-03">
              <span className="pl-2">8+</span>
            </div>
          </div>
          <span className="text-[12px]">Muito bom (543)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-[190px] h-[30px] bg-[#D9D9D9] leading-[30px]">
            <div className="absolute top-0 left-0 w-[50%] h-full bg-support-03">
              <span className="pl-2">7+</span>
            </div>
          </div>
          <span className="text-[12px]">Bom (543)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-[190px] h-[30px] bg-[#D9D9D9] leading-[30px]">
            <div className="absolute top-0 left-0 w-[30%] h-full bg-support-03">
              <span className="pl-2">6+</span>
            </div>
          </div>
          <span className="text-[12px]">Ruim (543)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-[190px] h-[30px] bg-[#D9D9D9] leading-[30px]">
            <div className="absolute top-0 left-0 w-[5%] h-full bg-support-03">
              <span className="pl-2"></span>
            </div>
          </div>
          <span className="text-[12px]">Pessímo (14)</span>
        </div> */}
      </div>
    </FilterAreaContainer>
  )
}
