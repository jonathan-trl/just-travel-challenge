import { JTTrash } from '@/components/icon/JTTrash'
import { useCart } from '@/store/useCart'
import { TicketItem } from '@/types/Ticket'
import Image from 'next/image'
import Link from 'next/link'

export const CartTicketsItem = ({ ticket }: TicketItem) => {
  const { removeItem } = useCart()
  ticket.createdAt = new Date(ticket.createdAt)

  return (
    <div className="flex items-start gap-3 py-5 border-b border-gray-10">
      <div className="relative w-[57px] h-[62px]">
        <Image src={ticket.image} fill className="object-cover" alt="" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between pb-2 border-b border-gray-10">
          <div className="flex flex-col">
            <Link
              href={`/ticket/${ticket.id}`}
              className="text-md text-[#646981]"
            >
              {ticket.name} - {ticket.createdAt.toLocaleDateString('pt-br')}
            </Link>
            <span className="mt-2 text-[#989AA7]">
              1 Adulto: R$500,00 2 Crianças: R$234,33
            </span>
          </div>
          <span
            className="cursor-pointer"
            onClick={() => removeItem(ticket.id)}
          >
            <JTTrash />
          </span>
        </div>
        <div className="flex justify-between pt-2 pb-3">
          <span className="text-md text-[#646981]">Qtd 1</span>
          <span className="text-md text-[#646981]">
            {ticket.price.discount.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-circular-std text-md text-brand-black font-bold">
            Subtotal
          </span>
          <span className="text-md font-semibold text-[#17191C]">
            {ticket.price.discount.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
