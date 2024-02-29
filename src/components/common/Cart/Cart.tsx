'use client'
import { CartItem } from '@/store/useCart'
import { CartCheckout } from './CartCheckout'
import { CartSubtotal } from './CartSubtotal'
import { CartTickets } from './CartTickets'

type CartProps = {
  cart: CartItem[]
  totalPrice: () => number
}
export const Cart = ({ cart, totalPrice }: CartProps) => {
  return (
    <div className="bg-white w-[500px] px-5 overflow-y-auto max-h-[540px] shadow-lg font-inter">
      {cart.length > 0 ? (
        <div data-testid="cart-with-items">
          <CartTickets tickets={cart} />
          <CartSubtotal totalPrice={totalPrice} />
          <CartCheckout totalPrice={totalPrice} />
        </div>
      ) : (
        <span className="inline-block py-4">Não há itens no carrinho!</span>
      )}
    </div>
  )
}
