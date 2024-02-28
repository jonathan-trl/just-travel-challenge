import { JTStar } from '@/components/icon/JTStar'
import { ratings } from '@/mocks/filters/Ratings'
import { useState } from 'react'
import { FilterAreaContainer } from '../Layout/FilterAreaContainer'
import { FilterAreaTitle } from '../Layout/FilterAreaTitle'

export const FilterAreaRatings = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null)

  const handleSelectReview = (id: number) => {
    setSelectedReview(id === selectedReview ? null : id)
  }
  return (
    <FilterAreaContainer>
      <FilterAreaTitle title="Avaliações" />
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {ratings.map((rating) => (
          <div
            key={rating.id}
            className={`flex items-center border border-gray-10 p-1 cursor-pointer ${
              rating.id == selectedReview ? 'bg-gray-10' : ''
            }`}
            onClick={() => handleSelectReview(rating.id)}
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
      </div>
    </FilterAreaContainer>
  )
}
