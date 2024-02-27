export type TicketRating = {
  reviewsCount: number
  value: number
}

export type Ticket = {
  id: string
  name: string
  location: string
  image: string
  description: string
  price: {
    full: number
    discount: number
  }
  rating: TicketRating
  createdAt: Date
  updatedAt: Date
}

export type TicketItem = {
  ticket: Ticket
}
