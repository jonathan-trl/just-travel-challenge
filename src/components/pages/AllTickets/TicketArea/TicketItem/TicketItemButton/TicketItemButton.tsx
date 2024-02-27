import { ReactNode } from 'react'

type TicketItemButtonProps = {
  children: ReactNode
}
export const TicketItemButton = ({ children }: TicketItemButtonProps) => {
  return (
    <button className="w-[70px] h-[24px] leading-[24px] text-center bg-white rounded-[15px] text-sm text-brand-black">
      {children}
    </button>
  )
}
