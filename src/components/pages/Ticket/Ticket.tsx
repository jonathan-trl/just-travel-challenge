import { Button } from '@/components/common/Button'
import { TicketHeader } from '@/components/common/TicketHeader'
import { JTButtonBack } from '@/components/icon/JTButtonBack'
import { Ticket as TTicket } from '@/types/Ticket'
import Image from 'next/image'
import { TicketCheckout } from './TicketCheckout'
import { TicketInfo } from './TicketInfo'
import { ButtonBack } from '@/components/common/ButtonBack'

type TicketProps = {
  ticket: TTicket
}

export const Ticket = ({ ticket }: TicketProps) => {
  return (
    <div className="container py-12">
      <div className="flex items-start">
        <span className="mr-4">
          <ButtonBack />
        </span>
        <TicketHeader heading="heading-2" ticket={ticket} />
      </div>
      <div className="relative w-full h-[434px] my-10">
        <div className="relative z-20 w-[210px] ml-auto text-right pt-4 pr-4">
          <Button
            title="Visualizar mais fotos"
            colorScheme="secondary"
            size="md"
            borderless
          />
        </div>
        <Image src={ticket.image} fill className="object-cover z-10" alt="Imagem do ingresso" />
      </div>
      <div className="grid xl:grid-cols-12 items-start gap-spacing-sm">
        <TicketInfo ticket={ticket} />
        <TicketCheckout ticket={ticket} />
      </div>
    </div>
  )
}
