import { ReactNode } from 'react'

type FilterAreaContainerProps = {
  children: ReactNode
}
export const FilterAreaContainer = ({ children }: FilterAreaContainerProps) => {
  return <div className="py-spacing-xs border-b border-gray-10">{children}</div>
}
