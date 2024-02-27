import { TicketRating } from '@/components/common/TicketRating'
import { JTCoffeCup } from '@/components/icon/JTCoffeCup'
import { JTHome } from '@/components/icon/JTHome'
import { JTTravelTicket } from '@/components/icon/JTTravelTicket'
import { JTWifi } from '@/components/icon/JTWifi'
import { TicketItem } from '@/types/Ticket'
import Image from 'next/image'

export const TicketInfo = ({ ticket }: TicketItem) => {
  return (
    <div className="col-span-9 w-full">
      <TicketRating rating={ticket.rating} />
      <div className="flex items-center mt-7 gap-4">
        <div className="flex gap-2 items-center">
          <span>
            <JTTravelTicket />
          </span>
          <span className="text-gray-40">Passagem Aérea</span>
        </div>

        <div className="flex gap-2 items-center">
          <span>
            <JTWifi />
          </span>
          <span className="text-gray-40">Wi-fi</span>
        </div>

        <div className="flex gap-2 items-center">
          <span>
            <JTCoffeCup />
          </span>
          <span className="text-gray-40">Café de manhã</span>
        </div>

        <div className="flex gap-2 items-center">
          <span>
            <JTHome color="#9EA5B8" />
          </span>
          <span className="text-gray-40">Quarto</span>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-brand-black mb-spacing-xxs">
          Sobre o Ingresso selecionado:
        </h3>
        <p className="text-md text-gray-40 mb-8">{ticket.description}</p>
      </div>
      <div className="mt-spacing-sm">
        <h3 className="text-brand-black mb-spacing-xxs">Localização:</h3>
        <div className="relative w-full h-[340px]">
          <Image src={'/images/map.png'} fill className="object-cover" alt="" />
        </div>
      </div>
    </div>
  )
}
