import { useCart } from '@/store/useCart'
import { Button } from '../../Button'

export const CartCheckout = () => {
  const { totalPrice } = useCart()
  return (
    <div className="py-6">
      <div className="flex justify-between">
        <span className="text-md text-brand-black font-bold">Valor total</span>
        <span className="text-heading-2 text-brand-blue">
          {totalPrice().toLocaleString('pt-br')}
        </span>
      </div>
      <div className="mt-6">
        <Button size="lg" title="Ir para o check out" />
      </div>
    </div>
  )
}
