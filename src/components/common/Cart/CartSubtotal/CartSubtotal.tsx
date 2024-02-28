import { formatPrice } from '@/utils/formatPrice'

type CartSubtotalProps = {
  totalPrice: () => number
}
export const CartSubtotal = ({ totalPrice }: CartSubtotalProps) => {

  const discountValue = totalPrice() * (7 / 100)
  const totalDiscount = totalPrice() - discountValue

  return (
    <div className="py-4 flex flex-col gap-4 border-b border-gray-10 text-md">
      <div className="flex justify-between">
        <span className="text-[#868A9D]">Ingressos</span>
        <span className="text-[#868A9D]">{formatPrice(totalPrice())}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-circular-std text-brand-black font-bold">
          Subtotal
        </span>
        <span className="font-semibold text-[#17191C]">
          {formatPrice(totalPrice())}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#868A9D]">
          1X de {formatPrice(totalDiscount)} com desconto de{' '}
          <span className="text-[#00919E]">(7%)</span>
        </span>
        <span className="text-[#00919E] font-semibold">
          -{formatPrice(totalDiscount)}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#868A9D]">
          10X Sem juros de {formatPrice(totalPrice() / 10)}
        </span>
        <span className="text-[#868A9D]">{formatPrice(totalPrice())}</span>
      </div>
    </div>
  )
}
