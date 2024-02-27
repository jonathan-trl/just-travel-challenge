import { ReactNode } from 'react'

type TicketItemButtonProps = {
  title: string
}
export const TicketItemButton = ({ title }: TicketItemButtonProps) => {
  return (
    <button className="w-[70px] h-[24px] leading-[24px] text-center bg-white rounded-[15px] text-sm text-brand-black">
      {title}
    </button>
  )
}
