'use client'
import { useCart } from '@/store/useCart'
import { CartCheckout } from './CartCheckout'
import { CartSubtotal } from './CartSubtotal'
import { CartTickets } from './CartTickets'

export const Cart = () => {
  const { cart } = useCart()

  return (
    <div className="absolute top-20 right-0 bg-white w-[500px] px-5 z-50 overflow-y-auto max-h-[540px] shadow-lg font-inter">
      {cart.length > 0 ? (
        <>
          <CartTickets tickets={cart} />
          <CartSubtotal />
          <CartCheckout />
        </>
      ) : (
        <span className="inline-block py-4">Não há itens no carrinho!</span>
      )}
    </div>
  )
}
