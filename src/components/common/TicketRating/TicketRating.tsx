import { TicketRating as TTicketRating } from '@/types/Ticket'

type TicketRatingProps = {
  rating: TTicketRating
}

export const TicketRating = ({ rating }: TicketRatingProps) => {
  return (
    <div className="flex items-center">
      <div className="w-[40px] h-[38px] leading-[38px] text-center text-gray-10 rounded-sm bg-brand-blue mr-2">
        {rating.value}
      </div>
      <span className="mr-spacing-xxs">Excellent</span>
      <span className="text-gray-40">({rating.reviewsCount} Reviews)</span>
    </div>
  )
}
