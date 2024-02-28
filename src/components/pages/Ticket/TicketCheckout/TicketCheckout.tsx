import { Button } from '@/components/common/Button'
import { JTCalendar } from '@/components/icon/JTCalendar'
import { JTChevronDown } from '@/components/icon/JTChevronDown'
import { JTUser } from '@/components/icon/JTUser'
import { TicketItem } from '@/types/Ticket'
import { formatDate } from '@/utils/formatDate'
import { formatPrice } from '@/utils/formatPrice'

export const TicketCheckout = ({ ticket }: TicketItem) => {
  ticket.createdAt = new Date(ticket.createdAt)

  return (
    <div
      className="lg:col-span-3 flex flex-col px-8 bg-white rounded-lg text-md"
      data-testid="ticket-checkout"
    >
      <div className="flex items-center justify-between border-b border-gray-10 py-6">
        <div className="flex gap-2">
          <span>
            <JTCalendar />
          </span>
          <div className="flex flex-col">
            <span className="text-brand-black font-bold">Data do ingresso</span>
            <span className="mt-1 text-gray-40">
              {formatDate(ticket.createdAt)}
            </span>
          </div>
        </div>
        <span>
          <JTChevronDown />
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-gray-10 py-6">
        <div className="flex gap-2">
          <span>
            <JTUser />
          </span>
          <div className="flex flex-col">
            <span className="text-brand-black font-bold">Ingressos</span>
            <span className="mt-1 text-gray-40">03 Ingressos</span>
          </div>
        </div>
        <span>
          <JTChevronDown />
        </span>
      </div>
      <div className="flex flex-col gap-3 justify-between border-b border-gray-10 py-6 text-gray-40">
        <div className="flex justify-between">
          <span>01 Ingresso infantil</span>
          <span>R$245,99</span>
        </div>
        <div className="flex justify-between">
          <span>01 Ingresso infantil</span>
          <span>R$245,99</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6 py-6">
        <div className="flex items-center justify-between">
          <span className="text-brand-black font-bold">Valor total</span>
          <span className="text-heading-2 font-bold text-brand-blue">
            {formatPrice(ticket.price.discount)}
          </span>
        </div>
        <Button size="lg" title="Comprar Ingresso" />
      </div>
    </div>
  )
}
