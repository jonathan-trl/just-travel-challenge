import { useCart } from '@/store/useCart'

export const CartSubtotal = () => {
  const { totalPrice } = useCart()

  const discountValue = totalPrice() * (7 / 100)
  const totalDiscount = totalPrice() - discountValue

  return (
    <div className="py-4 flex flex-col gap-4 border-b border-gray-10 text-md">
      <div className="flex justify-between">
        <span className="text-[#868A9D]">Ingressos</span>
        <span className="text-[#868A9D]">
          {totalPrice().toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-circular-std text-brand-black font-bold">
          Subtotal
        </span>
        <span className="font-semibold text-[#17191C]">
          {totalPrice().toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#868A9D]">
          1X de{' '}
          {totalDiscount.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          com desconto de <span className="text-[#00919E]">(7%)</span>
        </span>
        <span className="text-[#00919E] font-semibold">
          -
          {discountValue.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#868A9D]">
          10X Sem juros de{' '}
          {(totalPrice() / 10).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <span className="text-[#868A9D]">
          {totalPrice().toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
    </div>
  )
}
