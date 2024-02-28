import { useCart } from '@/store/useCart'
import { formatPrice } from '@/utils/formatPrice'
import { Button } from '../../Button'

type CartCheckoutProps = {
  totalPrice: () => number
}

export const CartCheckout = ({ totalPrice }: CartCheckoutProps) => {
  return (
    <div className="py-6">
      <div className="flex justify-between">
        <span className="text-md text-brand-black font-bold">Valor total</span>
        <span className="text-heading-2 text-brand-blue">
          {formatPrice(totalPrice(), false)}
        </span>
      </div>
      <div className="mt-6">
        <Button size="lg" title="Ir para o check out" />
      </div>
    </div>
  )
}
