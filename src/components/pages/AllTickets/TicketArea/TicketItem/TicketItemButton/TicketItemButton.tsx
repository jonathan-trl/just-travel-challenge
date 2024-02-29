import { ReactNode } from 'react'

type TicketItemButtonProps = {
  title: string
  href: string
}
export const TicketItemButton = ({ title, href }: TicketItemButtonProps) => {
  return (
    <a href={href} className="w-[70px] h-[24px] leading-[24px] text-center bg-white rounded-[15px] text-sm text-brand-black">
      {title}
    </a>
  )
}
