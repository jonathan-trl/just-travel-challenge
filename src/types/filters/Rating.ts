export interface RatingItem {
  id: number
}

export interface Rating {
  id: number
  qtt: number | string
  items: RatingItem[]
}
