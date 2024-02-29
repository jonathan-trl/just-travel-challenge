import { Ticket } from '@/types/Ticket'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  count: number
} & Ticket

export type CartStoreProps = {
  cart: CartItem[]
  count: () => number
  toggle: (ticket: Ticket) => void
  add: (ticket: Ticket) => void
  removeItem: (id: string) => void
  removeAll: () => void
  totalPrice: () => number
}

export const useCart = create<CartStoreProps>()(
  persist(
    (set, get) => ({
      cart: [],
      toggle: (ticket: Ticket) => {
        const { cart } = get()
        const updatedCart = toggleToCart(cart, ticket)
        set({ cart: updatedCart })
      },
      add: (ticket: Ticket) => {
        const { cart } = get()
        const updatedCart = toggleToCart(cart, ticket)
        set({ cart: updatedCart })
      },
      removeItem: (id: string) => {
        const { cart } = get()
        const updatedCart = removeFromCart(cart, id)
        set({ cart: updatedCart })
      },
      removeAll: () => {
        set({ cart: [] })
      },
      count: (): number => {
        const { cart } = get()
        if (cart.length) {
          return cart.map((item) => item.count).reduce((a, b) => a + b)
        }
        return 0
      },
      totalPrice: () => {
        const { cart } = get()
        if (cart.length) {
          return cart
            .map((item) => item.count * item.price.discount)
            .reduce((a, b) => a + b)
        }
        return 0
      },
    }),
    { name: 'cart-storage' }
  )
)

const toggleToCart = (cart: CartItem[], ticket: Ticket): CartItem[] => {
  const itemIndex = cart.findIndex((item) => item.id === ticket.id)

  if (itemIndex !== -1) {
    const updatedCart = [...cart]
    updatedCart.splice(itemIndex, 1)
    return updatedCart
  }

  return [...cart, { ...ticket, count: 1 }]
}

const removeFromCart = (cart: CartItem[], id: string): CartItem[] => {
  const item = cart.find((item) => item.id === id)
  if (item) {
    return cart.filter((item) => item.id !== id)
  }
  return cart
}
